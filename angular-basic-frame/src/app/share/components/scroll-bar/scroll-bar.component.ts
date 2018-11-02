import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'benniao-scroll-bar',
	templateUrl: './scroll-bar.component.html',
	styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements AfterViewInit {

	@ViewChild('scrollContainer') scrollContainer: ElementRef;

	set height(height: number) {
		this._height = `${height}px`;
	};
	element: HTMLElement;
	_height: string;
	styleObj: any = {};
	yScrollContainerTop: number = 0;
	yScrollBarTop: number = 0;

	constructor() { }

	ngAfterViewInit() {
		this.element = this.scrollContainer.nativeElement;
		const { clientHeight, scrollHeight } = this.element;
		this.height = 400;
		this.styleObj = {
			height: this._height,
		}
	}

	startScrollTop: number;
	startMousePageY: number;
	endScrollTop: number;
	scrollBy: number;
	canScroll: boolean = false;

	mousedown(e: MouseEvent) {
		this.startScrollTop = this.element.scrollTop;
		this.startMousePageY = e.clientY;
		console.log(this.startMousePageY, this.startScrollTop);
		this.canScroll = true;
		e.stopPropagation();
		e.preventDefault();
	}

	mousemove(e: MouseEvent) {
		if(!this.canScroll) {
			return;
		}
		const { clientHeight, scrollHeight } = this.element;
		const scrollContainerMaxScrollValue = scrollHeight - clientHeight;
		const scrollBarMaxScrollValue = clientHeight - 50;  
		const maxScrollValue = scrollHeight - 50;
		console.log(scrollContainerMaxScrollValue, scrollBarMaxScrollValue, maxScrollValue)
		const mouseMoveY = e.clientY - this.startMousePageY;
		const _realScrollHeight = this.startScrollTop + mouseMoveY / scrollBarMaxScrollValue * scrollHeight;
		//scroll container scroll Top
		this.yScrollContainerTop = this.getMinValue(_realScrollHeight, scrollContainerMaxScrollValue);
		//scroll bar scroll Top
		this.yScrollBarTop = this.getMinValue(mouseMoveY, scrollBarMaxScrollValue);
		//real scroll
		this.element.scrollTo(0, this.getMinValue(_realScrollHeight, maxScrollValue));

		e.stopPropagation();
		e.preventDefault();
	}

	getMinValue(valOne, valTwo) {
		if(valOne <= 0) {
			return valTwo;
		}else {
			return valOne >= valTwo ? valTwo : valOne;
		}
	}

	mouseup(e: MouseEvent) {
		this.canScroll = false;
	}
}
