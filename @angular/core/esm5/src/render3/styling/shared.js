/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The default directive styling index value for template-based bindings.
 *
 * All host-level bindings (e.g. `hostStyleProp` and `hostStylingMap`) are
 * assigned a directive styling index value based on the current directive
 * uniqueId and the directive super-class inheritance depth. But for template
 * bindings they always have the same directive styling index value.
 */
export var DEFAULT_TEMPLATE_DIRECTIVE_INDEX = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9zdHlsaW5nL3NoYXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0NBQWdDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGRpcmVjdGl2ZSBzdHlsaW5nIGluZGV4IHZhbHVlIGZvciB0ZW1wbGF0ZS1iYXNlZCBiaW5kaW5ncy5cbiAqXG4gKiBBbGwgaG9zdC1sZXZlbCBiaW5kaW5ncyAoZS5nLiBgaG9zdFN0eWxlUHJvcGAgYW5kIGBob3N0U3R5bGluZ01hcGApIGFyZVxuICogYXNzaWduZWQgYSBkaXJlY3RpdmUgc3R5bGluZyBpbmRleCB2YWx1ZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3RpdmVcbiAqIHVuaXF1ZUlkIGFuZCB0aGUgZGlyZWN0aXZlIHN1cGVyLWNsYXNzIGluaGVyaXRhbmNlIGRlcHRoLiBCdXQgZm9yIHRlbXBsYXRlXG4gKiBiaW5kaW5ncyB0aGV5IGFsd2F5cyBoYXZlIHRoZSBzYW1lIGRpcmVjdGl2ZSBzdHlsaW5nIGluZGV4IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9URU1QTEFURV9ESVJFQ1RJVkVfSU5ERVggPSAwO1xuIl19