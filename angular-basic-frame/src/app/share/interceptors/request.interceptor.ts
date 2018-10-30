import { Injectable } from "@angular/core";
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const clonedRequest = req.clone({
			headers: req.headers.set("x-sid", "benniao")
		});
		return next.handle(clonedRequest);
	}
}