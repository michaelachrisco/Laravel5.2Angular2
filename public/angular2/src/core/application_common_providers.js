'use strict';var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var application_tokens_1 = require('./application_tokens');
var change_detection_1 = require('./change_detection/change_detection');
var view_pool_1 = require('./linker/view_pool');
var view_manager_1 = require('./linker/view_manager');
var view_manager_2 = require("./linker/view_manager");
var view_manager_utils_1 = require('./linker/view_manager_utils');
var view_resolver_1 = require('./linker/view_resolver');
var view_listener_1 = require('./linker/view_listener');
var proto_view_factory_1 = require('./linker/proto_view_factory');
var directive_resolver_1 = require('./linker/directive_resolver');
var pipe_resolver_1 = require('./linker/pipe_resolver');
var compiler_1 = require('./linker/compiler');
var compiler_2 = require("./linker/compiler");
var dynamic_component_loader_1 = require('./linker/dynamic_component_loader');
var dynamic_component_loader_2 = require("./linker/dynamic_component_loader");
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
exports.APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([
    new di_1.Provider(compiler_1.Compiler, { useClass: compiler_2.Compiler_ }),
    application_tokens_1.APP_ID_RANDOM_PROVIDER,
    view_pool_1.AppViewPool,
    new di_1.Provider(view_pool_1.APP_VIEW_POOL_CAPACITY, { useValue: 10000 }),
    new di_1.Provider(view_manager_1.AppViewManager, { useClass: view_manager_2.AppViewManager_ }),
    view_manager_utils_1.AppViewManagerUtils,
    view_listener_1.AppViewListener,
    proto_view_factory_1.ProtoViewFactory,
    view_resolver_1.ViewResolver,
    new di_1.Provider(change_detection_1.IterableDiffers, { useValue: change_detection_1.defaultIterableDiffers }),
    new di_1.Provider(change_detection_1.KeyValueDiffers, { useValue: change_detection_1.defaultKeyValueDiffers }),
    directive_resolver_1.DirectiveResolver,
    pipe_resolver_1.PipeResolver,
    new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, { useClass: dynamic_component_loader_2.DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQStCLDBCQUEwQixDQUFDLENBQUE7QUFDMUQsbUJBQXVELHNCQUFzQixDQUFDLENBQUE7QUFDOUUsbUNBSU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixpQ0FLTyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzdDLDBCQUFrRCxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3ZFLDZCQUE2Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3JELDZCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELG1DQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2hFLDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDhCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3ZELG1DQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELG1DQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELHlCQUF1QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzNDLHlCQUF3QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzVDLHlDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHlDQUFzQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRTFFOzs7R0FHRztBQUNVLG9DQUE0QixHQUFtQyxpQkFBVSxDQUFDO0lBQ3JGLElBQUksYUFBUSxDQUFDLG1CQUFRLEVBQUUsRUFBQyxRQUFRLEVBQUUsb0JBQVMsRUFBQyxDQUFDO0lBQzdDLDJDQUFzQjtJQUN0Qix1QkFBVztJQUNYLElBQUksYUFBUSxDQUFDLGtDQUFzQixFQUFFLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0lBQ3ZELElBQUksYUFBUSxDQUFDLDZCQUFjLEVBQUUsRUFBQyxRQUFRLEVBQUUsOEJBQWUsRUFBQyxDQUFDO0lBQ3pELHdDQUFtQjtJQUNuQiwrQkFBZTtJQUNmLHFDQUFnQjtJQUNoQiw0QkFBWTtJQUNaLElBQUksYUFBUSxDQUFDLGtDQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUseUNBQXNCLEVBQUMsQ0FBQztJQUNqRSxJQUFJLGFBQVEsQ0FBQyxrQ0FBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLHlDQUFzQixFQUFDLENBQUM7SUFDakUsc0NBQWlCO0lBQ2pCLDRCQUFZO0lBQ1osSUFBSSxhQUFRLENBQUMsaURBQXNCLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0RBQXVCLEVBQUMsQ0FBQztDQUMxRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge3Byb3ZpZGUsIFByb3ZpZGVyLCBJbmplY3RvciwgT3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7XG4gIEFQUF9DT01QT05FTlRfUkVGX1BST01JU0UsXG4gIEFQUF9DT01QT05FTlQsXG4gIEFQUF9JRF9SQU5ET01fUFJPVklERVJcbn0gZnJvbSAnLi9hcHBsaWNhdGlvbl90b2tlbnMnO1xuaW1wb3J0IHtcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBkZWZhdWx0SXRlcmFibGVEaWZmZXJzLFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIGRlZmF1bHRLZXlWYWx1ZURpZmZlcnNcbn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtBcHBWaWV3UG9vbCwgQVBQX1ZJRVdfUE9PTF9DQVBBQ0lUWX0gZnJvbSAnLi9saW5rZXIvdmlld19wb29sJztcbmltcG9ydCB7QXBwVmlld01hbmFnZXJ9IGZyb20gJy4vbGlua2VyL3ZpZXdfbWFuYWdlcic7XG5pbXBvcnQge0FwcFZpZXdNYW5hZ2VyX30gZnJvbSBcIi4vbGlua2VyL3ZpZXdfbWFuYWdlclwiO1xuaW1wb3J0IHtBcHBWaWV3TWFuYWdlclV0aWxzfSBmcm9tICcuL2xpbmtlci92aWV3X21hbmFnZXJfdXRpbHMnO1xuaW1wb3J0IHtWaWV3UmVzb2x2ZXJ9IGZyb20gJy4vbGlua2VyL3ZpZXdfcmVzb2x2ZXInO1xuaW1wb3J0IHtBcHBWaWV3TGlzdGVuZXJ9IGZyb20gJy4vbGlua2VyL3ZpZXdfbGlzdGVuZXInO1xuaW1wb3J0IHtQcm90b1ZpZXdGYWN0b3J5fSBmcm9tICcuL2xpbmtlci9wcm90b192aWV3X2ZhY3RvcnknO1xuaW1wb3J0IHtEaXJlY3RpdmVSZXNvbHZlcn0gZnJvbSAnLi9saW5rZXIvZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7UGlwZVJlc29sdmVyfSBmcm9tICcuL2xpbmtlci9waXBlX3Jlc29sdmVyJztcbmltcG9ydCB7Q29tcGlsZXJ9IGZyb20gJy4vbGlua2VyL2NvbXBpbGVyJztcbmltcG9ydCB7Q29tcGlsZXJffSBmcm9tIFwiLi9saW5rZXIvY29tcGlsZXJcIjtcbmltcG9ydCB7RHluYW1pY0NvbXBvbmVudExvYWRlcn0gZnJvbSAnLi9saW5rZXIvZHluYW1pY19jb21wb25lbnRfbG9hZGVyJztcbmltcG9ydCB7RHluYW1pY0NvbXBvbmVudExvYWRlcl99IGZyb20gXCIuL2xpbmtlci9keW5hbWljX2NvbXBvbmVudF9sb2FkZXJcIjtcblxuLyoqXG4gKiBBIGRlZmF1bHQgc2V0IG9mIHByb3ZpZGVycyB3aGljaCBzaG91bGQgYmUgaW5jbHVkZWQgaW4gYW55IEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uLCByZWdhcmRsZXNzIG9mIHRoZSBwbGF0Zm9ybSBpdCBydW5zIG9udG8uXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTOiBBcnJheTxUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXT4gPSBDT05TVF9FWFBSKFtcbiAgbmV3IFByb3ZpZGVyKENvbXBpbGVyLCB7dXNlQ2xhc3M6IENvbXBpbGVyX30pLFxuICBBUFBfSURfUkFORE9NX1BST1ZJREVSLFxuICBBcHBWaWV3UG9vbCxcbiAgbmV3IFByb3ZpZGVyKEFQUF9WSUVXX1BPT0xfQ0FQQUNJVFksIHt1c2VWYWx1ZTogMTAwMDB9KSxcbiAgbmV3IFByb3ZpZGVyKEFwcFZpZXdNYW5hZ2VyLCB7dXNlQ2xhc3M6IEFwcFZpZXdNYW5hZ2VyX30pLFxuICBBcHBWaWV3TWFuYWdlclV0aWxzLFxuICBBcHBWaWV3TGlzdGVuZXIsXG4gIFByb3RvVmlld0ZhY3RvcnksXG4gIFZpZXdSZXNvbHZlcixcbiAgbmV3IFByb3ZpZGVyKEl0ZXJhYmxlRGlmZmVycywge3VzZVZhbHVlOiBkZWZhdWx0SXRlcmFibGVEaWZmZXJzfSksXG4gIG5ldyBQcm92aWRlcihLZXlWYWx1ZURpZmZlcnMsIHt1c2VWYWx1ZTogZGVmYXVsdEtleVZhbHVlRGlmZmVyc30pLFxuICBEaXJlY3RpdmVSZXNvbHZlcixcbiAgUGlwZVJlc29sdmVyLFxuICBuZXcgUHJvdmlkZXIoRHluYW1pY0NvbXBvbmVudExvYWRlciwge3VzZUNsYXNzOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyX30pXG5dKTsiXX0=