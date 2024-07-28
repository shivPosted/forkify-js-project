// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./viewJS/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./viewJS/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./viewJS/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./viewJS/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./viewJS/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _configJs = require("./config.js");
var _addRecipeViewJs = require("./viewJS/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
const controlRecipe = async function() {
    //1.loading the recipe
    const id = window.location.hash.slice(1);
    if (!id) return;
    // if (id === 'undefined') {
    //   recipeView.render(model.state.recipe);
    //   return;
    // }
    try {
        (0, _recipeViewJsDefault.default).renderSpinner();
        (0, _bookmarkViewJsDefault.default).update(_modelJs.state.bookmarks);
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchPaged());
        await _modelJs.loadRecipe(id);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        console.log(_modelJs.state.recipe);
    //2. rendering the recipe
    } catch (err) {
        console.log(err);
        (0, _recipeViewJsDefault.default).handleError();
    }
};
const controlSearch = async function() {
    try {
        const searchKey = (0, _searchViewJsDefault.default).getQuery();
        if (!searchKey) return;
        (0, _resultsViewJsDefault.default).renderSpinner();
        await _modelJs.loadSearch(searchKey);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchPaged());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.searchedResults);
    } catch (err) {
        console.log(err);
        (0, _resultsViewJsDefault.default).handleError();
    }
};
const controlPagination = function(page) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchPaged(page));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.searchedResults);
};
const controlServings = function(operator) {
    _modelJs.changeServings(operator);
    // ingredientsView.render(model.state.recipe.ingredients);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlBookmarks = function() {
    // const recipeToBookmark = model.recipe.filter;
    _modelJs.alterBookmark();
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
    console.log(_modelJs.state.bookmarks);
};
const controlBookmarkLoader = function() {
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlForm = function(newRecipe) {
    try {
        _modelJs.addNewRecipe(newRecipe);
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        setTimeout(()=>{
            (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
            (0, _addRecipeViewJsDefault.default).closePopUp();
            controlBookmarks();
        }, 2500);
    } catch (err) {
        (0, _addRecipeViewJsDefault.default).handleError(err.message);
    }
};
function init() {
    (0, _bookmarkViewJsDefault.default).addBookmarkLoader(controlBookmarkLoader);
    (0, _recipeViewJsDefault.default).renderEventHandler(controlRecipe);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearch);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _recipeViewJsDefault.default).addHandlerIngredients(controlServings);
    // resultsView.addHandlerClick();
    (0, _recipeViewJsDefault.default).addHandlerBookmark(controlBookmarks);
    (0, _addRecipeViewJsDefault.default).handleForm(controlForm);
}
init();

},{"./model.js":"Y4A21","./viewJS/recipeView.js":"dz1cH","./viewJS/searchView.js":"hNmQm","./viewJS/resultsView.js":"1h5Te","./viewJS/paginationView.js":"5OYDP","./viewJS/bookmarkView.js":"gkZv0","./config.js":"k5Hzs","./viewJS/addRecipeView.js":"g3jXC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
// import { async } from 'regenerator-runtime';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearch", ()=>loadSearch);
parcelHelpers.export(exports, "getSearchPaged", ()=>getSearchPaged);
parcelHelpers.export(exports, "changeServings", ()=>changeServings);
parcelHelpers.export(exports, "alterBookmark", ()=>alterBookmark);
parcelHelpers.export(exports, "addNewRecipe", ()=>addNewRecipe);
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
const state = {
    searchedResults: {
        query: "",
        results: [],
        pageNo: 1,
        resPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: []
};
const createRecipeObject = function(recipe) {
    return {
        time: +recipe.cooking_time,
        img: recipe.image_url,
        source: recipe.source_url,
        title: recipe.title,
        publisher: recipe.publisher,
        servings: recipe.servings,
        ingredients: recipe.ingredients,
        ...recipe.id && {
            id: recipe.id
        }
    };
};
async function loadRecipe(id) {
    try {
        const url = `${(0, _configJs.API_BASE_URL)}${id}?key=${(0, _configJs.API_KEY)}`;
        const data = await (0, _helperJs.getJSON)(url);
        const { recipe } = data.data;
        state.recipe = createRecipeObject(recipe);
        state.bookmarks.some((bookmark)=>bookmark.id === id) ? state.recipe.isBookMarked = true : state.recipe.isBookMarked = false;
        console.log(state.recipe);
    } catch (err) {
        throw err;
    }
}
async function loadSearch(searchKey) {
    try {
        const url = `${(0, _configJs.API_BASE_URL)}?search=${searchKey}&key=${(0, _configJs.API_KEY)}`;
        const data = await (0, _helperJs.getJSON)(url);
        const { recipes } = data.data;
        state.searchedResults.pageNo = 1;
        state.searchedResults.results = recipes.map((record)=>{
            return {
                img: record.image_url,
                title: record.title,
                publisher: record.publisher,
                id: record.id
            };
        });
    } catch (err) {
        throw err;
    }
}
const getSearchPaged = function(page = state.searchedResults.pageNo) {
    state.searchedResults.pageNo = page;
    const start = (page - 1) * (0, _configJs.RES_PER_PAGE);
    const end = page * (0, _configJs.RES_PER_PAGE);
    return state.searchedResults.results.slice(start, end);
};
const changeServings = function(servingOps) {
    if (state.recipe.servings === 1 && servingOps === "-") return;
    state.recipe.ingredients.forEach((ing)=>{
        if (!ing.quantity) return;
        const divider = ing.quantity / state.recipe.servings;
        if (servingOps === "+") ing.quantity = (+ing.quantity + divider).toFixed(1);
        else ing.quantity = (+ing.quantity - divider).toFixed(1);
    });
    if (servingOps === "+") state.recipe.servings += 1;
    else state.recipe.servings -= 1;
};
const alterLocalStorageBookmark = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const alterBookmark = function() {
    //for adding uploaded recipe to bookmarks
    if (!state.recipe.id) {
        state.bookmarks.unshift(state.recipe);
        alterLocalStorageBookmark();
        return;
    }
    state.recipe.isBookMarked = !state.recipe.isBookMarked;
    const id = window.location.hash.slice(1);
    //removing a bookmark
    if (!state.recipe.isBookMarked) {
        for (const [i, value] of state.bookmarks.entries())if (id === value.id) {
            state.bookmarks.splice(i, 1);
            alterLocalStorageBookmark();
        }
        return;
    }
    const isThere = state.bookmarks.some((bookmark)=>{
        return id === bookmark.id;
    });
    //not adding bookmark if already present
    if (isThere) return;
    else {
        state.bookmarks.unshift(state.recipe);
        alterLocalStorageBookmark();
    }
};
const addNewRecipe = function(recipe) {
    try {
        const ingredients = Object.entries(recipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
            const ingArr = ing[1].replaceAll(" ", "").split(",");
            if (ingArr.length !== 3) throw new Error("Format for ingredient not correct. Please type defined format :)");
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const newRecipe = {
            cooking_time: +recipe.time,
            image_url: recipe.img,
            source_url: recipe.source,
            title: recipe.title,
            publisher: recipe.publisher,
            servings: +recipe.servings,
            ingredients,
            isBookMarked: true
        };
        state.recipe = createRecipeObject(newRecipe);
    } catch (err) {
        throw err;
    }
};
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    // if (storage) state.bookmarks = storage;
    if (storage) state.bookmarks = JSON.parse(storage);
    console.log(JSON.parse(storage));
};
init();
const clearBookmark = function() {
    localStorage.removeItem("bookmarks");
};
clearBookmark();

},{"./config.js":"k5Hzs","./helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_BASE_URL", ()=>API_BASE_URL);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "TIME_OUT_SEC", ()=>TIME_OUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
const API_BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const API_KEY = "5b0f13db-34ac-41da-941f-76dbebc41504";
const TIME_OUT_SEC = 10;
const RES_PER_PAGE = 9;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _configJs = require("./config.js");
const timeOut = function(s) {
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject(`Request Timout after ${s} seconds`);
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeOut((0, _configJs.TIME_OUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.statusText})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dz1cH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg"); //parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// console.log(Fraction);
class RecipeView extends (0, _viewJsDefault.default) {
    _data;
    _parentElem = document.querySelector(".recipe-detailed-info");
    _errorMsg = "We could not find that recipe.Please try again \uD83D\uDE22\uD83D\uDE22";
    localStorageData;
    //getting rnder function from the controller which inturn is calling this mehtod
    renderEventHandler(render) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>{
            window.addEventListener(ev, render);
            if (ev === "load") this.localStorageData = localStorage.getItem("bookmark");
        });
    }
    _buildMarkup() {
        return `<div class="recipe--overview">
    <figure>
      <img src=${this._data.img} alt="${this._data.title}" />
      <h1 class="recipe--title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    <div class="recipe--overview--options">
      <div class="cooking--time">
        <svg class="clock--icon">
          <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span>${this._data.time}</span> Minutes
      </div>
      <div class="serving--selector">
        <svg class="user--icon">
          <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span>${this._data.servings}</span> servings
        <svg class="minus--icon ing-updater" data-icon-op="-">
          <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
        </svg>
        <svg class="plus--icon ing-updater" data-icon-op="+">
          <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
        </svg>
      </div>
      <div class="bookmark--icon--container">
        <svg class="bookmark--icon">
          <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.isBookMarked ? "-fill" : ""}"></use>
        </svg>
      </div>
    </div>
    <div class="recipe-ingredient-list-container">
      <h4>RECIPE INGREDIENTS</h4>
      <ul class="ingredient--list">
       ${this._data.ingredients.reduce((accum, elem)=>{
            let unit, quantity;
            quantity = elem.quantity ? new (0, _fractional.Fraction)(elem.quantity).toString() : "";
            unit = elem.unit ? elem.unit : "";
            return accum += `<li class="ingredient--list--item">
                                <svg class="check--icon">
                                   <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
                                </svg>
                                 <span>${quantity} ${unit} ${elem.description}</span>
                               </li>`;
        }, "")}
      </ul>
    </div>

    <div class="how-to-cook-section">
      <h4>HOW TO COOK</h4>
      <p>
        This recipe was carefully designed and tested by
       <span class="recipe-source-id">${this._data.publisher}</span>. Please
        check out directions at their website.
      </p>
      <a href="${this._data.source}">
        <button class="btn go-to-btn">
          DIRECTIONS
          <svg class="arrow--icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      </a>
    </div>
  </div>
</div>`;
    }
    addHandlerIngredients(handle) {
        this._parentElem.addEventListener("click", function(e) {
            const target = e.target.closest(".ing-updater");
            if (!target) return;
            const operator = target.dataset.iconOp;
            handle(operator);
        });
    }
    addHandlerBookmark(handle) {
        this._parentElem// .querySelector('.recipe--overview--options')
        .addEventListener("click", function(e) {
            const target = e.target.closest(".bookmark--icon--container");
            if (!target) return;
            handle();
        });
    }
}
exports.default = new RecipeView();

},{"./view.js":"g5XMt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","fractional":"3SU56","../../img/icons.svg":"cMpiy"}],"g5XMt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    render(data) {
        this._data = data;
        this._clear();
        this._parentElem.insertAdjacentHTML("afterbegin", this._buildMarkup());
    }
    renderSpinner() {
        this._clear();
        const markUp = `
                    <div class="spinner">
            <svg class="spinner--icon">
              <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
            </svg>
          </div>
          `;
        this._parentElem.insertAdjacentHTML("afterbegin", markUp);
    }
    _clear() {
        this._parentElem.innerHTML = "";
    }
    handleError(message = this._errorMsg) {
        this._clear();
        const markUp = `
    <div class="error-box">
            <svg class="error--icon">
              <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
            </svg>
            <p>${message}</p>
          </div>
    `;
        this._parentElem.insertAdjacentHTML("afterbegin", markUp);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._buildMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElem = Array.from(newDOM.querySelectorAll("*"));
        const curEl = Array.from(this._parentElem.querySelectorAll("*"));
        newElem.forEach((newElem, i)=>{
            const curElem = curEl[i];
            if (!newElem.isEqualNode(curElem) && newElem.firstChild?.nodeValue && newElem.firstChild?.nodeValue.trim() !== "") curElem.textContent = newElem.textContent;
            //updating attributes
            if (!newElem.isEqualNode(curElem)) Array.from(newElem.attributes).forEach((attr)=>{
                curElem.setAttribute(attr.name, attr.value);
            });
        });
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/icons.svg":"cMpiy"}],"cMpiy":[function(require,module,exports) {
module.exports = require("17cff2908589362b").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"17cff2908589362b":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"hNmQm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SearchView extends (0, _viewJsDefault.default) {
    _parentElem = document.querySelector(".search");
    _clear() {
        this._parentElem.querySelector(".search-box").value = "";
    }
    getQuery() {
        const query = this._parentElem.querySelector(".search-box").value;
        this._clear();
        return query;
    }
    addHandlerSearch(handle) {
        this._parentElem.addEventListener("submit", function(e) {
            e.preventDefault();
            handle();
        });
    }
}
exports.default = new SearchView();

},{"./view.js":"g5XMt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1h5Te":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElem = document.querySelector(".search--items");
    _errorMsg = "No recipe found for your query. Try changing the query.";
    _buildMarkup() {
        if (!this._data.length) {
            this.handleError(this._errorMsg);
            return "";
        }
        return this._data.reduce((accum, elem)=>{
            const hash = window.location.hash.slice(1);
            return accum += `<a href="#${elem.id}" class="preview--recipe">
      <div class="search---items---row ${hash === elem.id ? "selected" : ""}">
      <div class="recipe-img-container">
      <img src="${elem.img}" class="recipe-img" alt="${elem.title} image" />
      </div>
      <div class="recipe---labels">
      <h3 class="recipe-id">${elem.title}</h3>
      <h5 class="recipe-source-id">${elem.publisher}</h5>
      </div>
      </div>
      </a>`;
        }, "");
    }
}
exports.default = new ResultsView();

},{"./view.js":"g5XMt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OYDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewDefault.default) {
    _parentElem = document.querySelector(".pagination--section");
    _buildMarkup() {
        const totalPages = Math.ceil(this._data.results.length / this._data.resPerPage);
        const next = `<div class="page--no page--no--next" data-page-no="${this._data.pageNo + 1}">
      <span>Page ${this._data.pageNo + 1}</span>
      <svg class="arrow--icon">
        <use href="${(0, _iconsSvgDefault.default)}#icon-arrow-right"></use>
      </svg>
    </div>`;
        const prev = `<div class="page--no page--no--prev" data-page-no="${this._data.pageNo - 1}">
      <svg class="arrow--icon">
        <use href="${(0, _iconsSvgDefault.default)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.pageNo - 1}</span>
    </div>`;
        const pageInfo = ` <div class="on-what-page">
            <span class="current-page">${this._data.pageNo} </span> /
            <div class="total-page"> ${totalPages}</div>
          </div>`;
        //on page 1 and there are more pages
        if (totalPages > 1 && this._data.pageNo === 1) return pageInfo + next;
        else if (totalPages === 1) return ``;
        else if (this._data.pageNo === totalPages) return prev + pageInfo;
        else return prev + pageInfo + next;
    }
    addHandlerClick(handle) {
        this._parentElem.addEventListener("click", (e)=>{
            const target = e.target.closest(".page--no");
            if (!target) return;
            const page = +target.dataset.pageNo;
            handle(page);
            document.querySelector(".main-container").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
}
exports.default = new PaginationView();

},{"./view":"g5XMt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/icons.svg":"cMpiy"}],"gkZv0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarkView extends (0, _viewDefault.default) {
    _parentElem = document.querySelector(".bookmarks--section");
    constructor(){
        super();
        this._addHandlerMouse();
    }
    _buildMarkup() {
        if (this._data.length === 0) return `<svg class="bookmark--icon ">
              <use href="${0, _iconsSvgDefault.default}#icon-alert-circle"></use>
            </svg>
            <p>
              No bookmarks yet. Find a nice recipe and bookmark it ;)
            </p>`;
        return this._data.reduce((accum, elem)=>{
            const hash = window.location.hash.slice(1);
            return accum += `<a href="#${elem.id}" class="preview--recipe">
      <div class="search---items---row ${hash === elem.id ? "selected" : ""}">
      <div class="recipe-img-container">
      <img src="${elem.img}" class="recipe-img" alt="${elem.title} image" />
      </div>
      <div class="recipe---labels">
      <h3 class="recipe-id">${elem.title}</h3>
      <h5 class="recipe-source-id">${elem.publisher}</h5>
      </div>
      </div>
      </a>`;
        }, "");
    }
    addBookmarkLoader(handle) {
        window.addEventListener("load", handle);
    }
    _addHandlerMouse() {
        [
            "mouseenter",
            "mouseleave"
        ].forEach((ev)=>{
            if (ev === "mouseleave") {
                this._parentElem.addEventListener(ev, function() {
                    this.classList.add("hidden");
                });
                document.querySelector(".add-bookmark").addEventListener(ev, ()=>{
                    this._parentElem.classList.add("hidden");
                });
            } else if (ev === "mouseenter") {
                this._parentElem.addEventListener(ev, function() {
                    this.classList.remove("hidden");
                });
                document.querySelector(".add-bookmark").addEventListener(ev, ()=>{
                    this._parentElem.classList.remove("hidden");
                });
            }
        });
    }
}
exports.default = new BookmarkView();

},{"./view":"g5XMt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/icons.svg":"cMpiy"}],"g3jXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class AddRecipeView extends (0, _viewDefault.default) {
    _parentElem = document.querySelector(".recipe-adder-pop-up");
    _overlay = document.querySelector(".overlay");
    _recipeAdderPopUp = document.querySelector(".recipe-adder-pop-up");
    constructor(){
        super();
        this._addEventHandlerClick();
    // this.handleForm();
    }
    closePopUp() {
        this._overlay.classList.add("hidden");
        this._recipeAdderPopUp.classList.add("hidden");
        this.render();
    }
    _addEventHandlerClick() {
        document.body.addEventListener("click", (e)=>{
            const addRecipeBtn = e.target.closest(".add-recipe");
            const closePopUp = e.target.closest(".close-pop-up");
            if (!(addRecipeBtn || this._overlay || closePopUp)) return;
            if (addRecipeBtn) {
                this._recipeAdderPopUp.classList.remove("hidden");
                this._overlay.classList.remove("hidden");
            } else if (closePopUp || e.target === this._overlay) {
                this._recipeAdderPopUp.classList.add("hidden");
                this._overlay.classList.add("hidden");
            }
        });
    }
    _buildMarkup() {
        return `<button class="close-pop-up">&times;</button>
      <form class="recipe-form">
        <div class="upload-column upload-column-1">
          <h6>RECIPE DATA</h6>
          <label for="title-recipe">Title</label>
          <input type="text" id="title-recipe" value="title" name="title" />
          <label for="url-recipe">URL</label>
          <input type="text" id="url-recipe" name="source" />
          <label for="image-url-recipe">Image url</label>
          <input type="text" id="image-url-recipe" name="img" />
          <label for="publisher-recipe">Publisher</label>
          <input type="text" id="publisher-recipe" name="publisher" />
          <label for="prep-time">PrepTime</label>
          <input type="number" id="prep-time" name="time" />
          <label for="serving-recipe">Servings</label>
          <input type="number" id="serving-recipe" name="servings" />
        </div>
        <div class="upload-column upload-column-2">
          <h6>INGREDIENTS</h6>
          <label for="ingredient-1-recipe">Ingredient 1</label>
          <input type="text" id="ingredient-1-recipe" name="ingredient-1" placeholder="Format: qty,unit,ingredient" value="1.5,kg,flour" />
          <label for="ingredient-2-recipe">Ingredient 2</label>
          <input type="text" id="ingredient-2-recipe" name="ingredient-2" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-3-recipe">Ingredient 3</label>
          <input type="text" id="ingredient-3-recipe" name="ingredient-3" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-4-recipe">Ingredient 4</label>
          <input type="text" id="ingredient-4-recipe" name="ingredient-4" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-5-recipe">Ingredient 5</label>
          <input type="text" id="ingredient-5-recipe" name="ingredient-5" placeholder="Format: qty,unit,ingredient" />
          <label for="ingredient-6-recipe">Ingredient 6</label>
          <input type="text" id="ingredient-6-recipe" name="ingredient-6" placeholder="Format: qty,unit,ingredient" />
        </div>
        <button class="upload-recipe-btn">
          <svg class="upload--icon">
            <use href="${0, _iconsSvgDefault.default}#icon-upload-cloud"></use>
          </svg>
          <span>UPLOAD</span>
        </button>
      </form>`;
    }
    handleForm(handle) {
        document.querySelector(".recipe-form").addEventListener("submit", function(e) {
            e.preventDefault();
            const data = [
                ...new FormData(this)
            ];
            const newRecipe = Object.fromEntries(data);
            handle(newRecipe);
        });
    }
}
exports.default = new AddRecipeView();

},{"../config":"k5Hzs","./view":"g5XMt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/icons.svg":"cMpiy"}]},["hycaY","aenu9"], "aenu9", "parcelRequirec01b")

//# sourceMappingURL=index.e37f48ea.js.map
