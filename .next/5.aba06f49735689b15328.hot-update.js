webpackHotUpdate(5,{

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(741);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1030);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(451);

var _web = __webpack_require__(683);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1195);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(1013);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\scott\\Desktop\\Solidity\\Kickstarter\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create and finalize requests.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minumum contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver.'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved, by the approvers, to be finalized.'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to the campaign'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Campaign Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { widht: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'View Requests!'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O2tDQWNVO21CQU9QLEtBUE8sQUFPRjtVQVBFLEFBRVYsaUJBRlUsQUFFVjtVQUZVLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsNkJBSlUsQUFJVjtVQUpVLEFBS1YsdUJBTFUsQUFLVjtVQUxVLEFBTVYsd0JBTlUsQUFNVixBQUdGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFPWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBVlUsQUFPWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBZlUsQUFZWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBcEJVLEFBaUJaLEFBR2U7QUFIZixBQUNFO2dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ3QixBQUNVLEFBQTRCLEFBQ3BDO2NBRkYsQUFFUSxBQUNOO3FCQXpCSixBQUFjLEFBc0JaLEFBR2UsQUFJakI7QUFQRSxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDSTtBQURKO2NBREYsQUFDRSxBQUNJLEFBQUssQUFFVCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBUE4sQUFFRSxBQUlFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FiUixBQUNFLEFBVUUsQUFDRSxBQUNFLEFBS1Q7Ozs7OzJHLEFBekU0Qjs7Ozs7bUJBQ3JCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQSxBQUFxQjs7dUJBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEEsQUFBOEI7O21CQUE5QztBOzsyQkFFSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjt1Q0FBcUIsUUFGaEIsQUFFZ0IsQUFBUSxBQUM3QjsyQkFBUyxRQUhKLEFBR0ksQUFBUSxBQUNqQjtpQ0FBZSxRQUpWLEFBSVUsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFMWCxBQUtXLEFBQVEsQUFDeEI7MkJBQVMsUUFOSixBQU1JLEFBQVEsQTtBQU5aLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMcUIsQSxBQTZFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zY290dC9EZXNrdG9wL1NvbGlkaXR5L0tpY2tzdGFydGVyIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\scott\\Desktop\\Solidity\\Kickstarter\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\scott\\Desktop\\Solidity\\Kickstarter\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hYmEwNmY0OTczNTY4OWIxNTMyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MjUyZjdlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcclxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhcmRzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBiYWxhbmNlLFxyXG4gICAgICBtYW5hZ2VyLFxyXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICByZXF1ZXN0c0NvdW50LFxyXG4gICAgICBhcHByb3ZlcnNDb3VudFxyXG4gICAgfSAgPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxyXG4gICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIGFuZCBmaW5hbGl6ZSByZXF1ZXN0cy4nLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICBtZXRhOiAnTWludW11bSBjb250cmlidXRpb24gKHdlaSknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3Zlci4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkLCBieSB0aGUgYXBwcm92ZXJzLCB0byBiZSBmaW5hbGl6ZWQuJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBBcHByb3ZlcnMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhlIGNhbXBhaWduJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgJ2V0aGVyJyksXHJcbiAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSBpcyBob3cgbXVjaCBtb25leSB0aGlzIGNhbXBhaWduIGhhcyBsZWZ0IHRvIHNwZW5kLidcclxuICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPkNhbXBhaWduIERldGFpbHM8L2gzPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDYXJkcygpIH1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkaHQ9ezZ9PlxyXG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSAvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3RzITwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBT0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBSUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7Ozs7O0FBeEVBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9