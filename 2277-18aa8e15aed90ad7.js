"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2277], {
        50744: function(e, r, n) {
            var t = n(35250),
                i = n(55344),
                a = n.n(i);
            n(70079);
            var o = function(e) {
                var r = e.children;
                return (0, t.jsx)(t.Fragment, {
                    children: r
                })
            };
            r.Z = a()(function() {
                return Promise.resolve(o)
            }, {
                ssr: !1
            })
        },
        82277: function(e, r, n) {
            n.d(r, {
                Z: function() {
                    return h
                }
            });
            var t = n(4337),
                i = n(35250),
                a = n(70079),
                o = n(21389),
                s = n(46020),
                l = n(33669),
                c = n(50744),
                u = n(13090);

            function d() {
                var e = (0, t._)(["overflow-hidden w-full h-full relative flex z-0"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, t._)(["relative h-full w-full transition-width overflow-auto"]);
                return f = function() {
                    return e
                }, e
            }

            function h(e) {
                var r = e.children,
                    n = e.showNavigation,
                    t = e.renderTitle,
                    o = e.renderMobileHeaderRightContent,
                    d = e.renderSidebar,
                    f = (0, l.w$)(),
                    m = [],
                    g = null;
                return a.Children.forEach(r, function(e) {
                    a.isValidElement(e) && (e.type === h.Sidebars ? g = e : m.push(e))
                }), (0, i.jsxs)(v, {
                    children: [f && n && (0, i.jsx)(c.Z, {
                        children: (0, i.jsx)(u.l6, {
                            children: d
                        })
                    }), (0, i.jsxs)("div", {
                        className: "relative flex h-full max-w-full flex-1 overflow-hidden",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-full max-w-full flex-1 flex-col",
                            children: [!f && n && (0, i.jsx)(c.Z, {
                                children: (0, i.jsx)(u.Vs, {
                                    onClickOpenSidebar: function() {
                                        return s.vm.toggleActiveSidebar("mobile-nav")
                                    },
                                    renderTitle: t,
                                    renderSidebar: d,
                                    renderRightContent: o
                                })
                            }), (0, i.jsx)(x, {
                                className: "flex-1",
                                children: m
                            })]
                        }), g]
                    })]
                })
            }
            var v = o.Z.div(d()),
                x = o.Z.main(f());
            h.Sidebars = function(e) {
                var r = e.children;
                return (0, i.jsx)(i.Fragment, {
                    children: r
                })
            }
        },
        13090: function(e, r, n) {
            n.d(r, {
                H: function() {
                    return S
                },
                MP: function() {
                    return N
                },
                Vs: function() {
                    return _
                },
                js: function() {
                    return C
                },
                l6: function() {
                    return F
                }
            });
            var t = n(39324),
                i = n(70216),
                a = n(35250),
                o = n(98359),
                s = n(20525),
                l = n(32148),
                c = n(19841),
                u = n(97296),
                d = n(70737),
                f = n(60554),
                h = n(70079),
                v = n(1454),
                x = n(70671),
                m = n(32004),
                g = n(94968),
                b = n(46020),
                p = n(33669),
                j = n(42271),
                y = n(45635),
                k = n(20522),
                w = n(15329);

            function N(e) {
                var r = e.onClick,
                    n = e.className,
                    o = (0, i._)(e, ["onClick", "className"]);
                return (0, a.jsx)(w.zV, (0, t._)({
                    onClick: r,
                    className: (0, c.default)(n, "flex-grow overflow-hidden")
                }, o))
            }

            function C(e) {
                var r = e.onClick,
                    n = (0, i._)(e, ["onClick"]);
                return (0, a.jsx)("button", (0, t._)({
                    type: "button",
                    className: "px-3",
                    onClick: r
                }, n))
            }

            function S() {
                var e = (0, x.Z)();
                return (0, p.w$)() ? (0, a.jsx)(y.u, {
                    side: "right",
                    label: e.formatMessage(z.closeSidebar),
                    children: (0, a.jsxs)(w.zV, {
                        onClick: b.vm.toggleDesktopNavCollapsed,
                        className: "w-11 flex-shrink-0 items-center justify-center bg-white dark:bg-transparent",
                        children: [(0, a.jsx)(v.iYc, {
                            className: "icon-sm"
                        }), (0, a.jsx)(l.f, {
                            children: (0, a.jsx)(m.Z, (0, t._)({}, z.closeSidebar))
                        })]
                    })
                }) : null
            }
            var Z = function(e) {
                    var r = e.onClose,
                        n = e.sidebarOpen,
                        i = e.children;
                    return (0, a.jsx)(o.u.Root, {
                        show: n,
                        as: h.Fragment,
                        children: (0, a.jsxs)(s.V, {
                            as: "div",
                            className: "dark relative",
                            onClose: r,
                            children: [(0, a.jsx)(o.u.Child, {
                                as: h.Fragment,
                                enter: "transition-opacity ease-linear duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, a.jsx)("div", {
                                    className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "fixed inset-0 flex",
                                children: [(0, a.jsx)(o.u.Child, {
                                    as: h.Fragment,
                                    enter: "transition ease-in-out duration-300 transform",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transition ease-in-out duration-300 transform",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: (0, a.jsxs)(s.V.Panel, {
                                        className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                        children: [(0, a.jsx)(o.u.Child, {
                                            as: h.Fragment,
                                            enter: "ease-in-out duration-300",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leave: "ease-in-out duration-300",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: (0, a.jsx)("div", {
                                                className: "absolute right-0 top-0 -mr-12 pt-2",
                                                children: (0, a.jsxs)("button", {
                                                    type: "button",
                                                    className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                                    onClick: r,
                                                    children: [(0, a.jsx)("span", {
                                                        className: "sr-only",
                                                        children: (0, a.jsx)(m.Z, (0, t._)({}, z.closeSidebar))
                                                    }), (0, a.jsx)(v.q5L, {
                                                        className: "icon-lg text-white",
                                                        "aria-hidden": "true"
                                                    })]
                                                })
                                            })
                                        }), i]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-14 flex-shrink-0"
                                })]
                            })]
                        })
                    })
                },
                _ = function(e) {
                    var r = e.onClickOpenSidebar,
                        n = e.renderTitle,
                        i = e.renderSidebar,
                        o = e.renderRightContent,
                        s = (0, b.tN)(function(e) {
                            return e.activeSidebar
                        }),
                        l = (0, f.useRouter)().asPath;
                    return (0, h.useEffect)(function() {
                        "mobile-nav" === s && b.vm.setActiveSidebar(!1)
                    }, [l]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                            children: [(0, a.jsxs)("button", {
                                type: "button",
                                className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                                onClick: r,
                                children: [(0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, a.jsx)(m.Z, (0, t._)({}, z.openSidebar))
                                }), (0, a.jsx)(v.cur, {
                                    "aria-hidden": "true",
                                    className: "icon-lg"
                                })]
                            }), (0, a.jsx)("h1", {
                                className: "flex-1 text-center text-base font-normal",
                                children: n
                            }), o]
                        }), (0, a.jsx)(Z, {
                            onClose: function() {
                                b.vm.setActiveSidebar(!1)
                            },
                            sidebarOpen: "mobile-nav" === s,
                            children: i
                        })]
                    })
                };

            function F(e) {
                var r = e.children,
                    n = (0, x.Z)(),
                    t = (0, h.useRef)(null),
                    i = (0, b.tN)(function(e) {
                        return e.isDesktopNavCollapsed
                    }),
                    o = (0, k.Ml)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.E.div, {
                        className: (0, c.default)("flex-shrink-0 overflow-x-hidden", o ? "border-r border-gray-100 bg-gray-50 gizmo:bg-white dark:border-0 dark:bg-gray-900" : "dark bg-gray-900"),
                        ref: t,
                        initial: !1,
                        animate: {
                            width: i ? 0 : "260px",
                            transition: {
                                duration: .165,
                                ease: "easeOut"
                            }
                        },
                        onAnimationStart: function() {
                            t.current && (t.current.style.visibility = "visible")
                        },
                        onAnimationComplete: function() {
                            t.current && i && (t.current.style.visibility = "hidden")
                        },
                        children: (0, a.jsx)("div", {
                            className: "h-full w-[260px]",
                            children: (0, a.jsx)("div", {
                                className: "flex h-full min-h-0 flex-col ",
                                children: r
                            })
                        })
                    }), (0, a.jsx)(d.M, {
                        initial: !1,
                        children: i && (0, a.jsx)(u.E.div, {
                            className: "absolute left-2 top-2 z-40 hidden md:inline-block",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                transition: {
                                    duration: .165,
                                    ease: "easeIn"
                                }
                            },
                            children: (0, a.jsx)(y.u, {
                                side: "right",
                                label: n.formatMessage(z.openSidebar),
                                children: (0, a.jsx)(j.O, {
                                    onClick: b.vm.toggleDesktopNavCollapsed,
                                    "aria-label": n.formatMessage(z.openSidebar),
                                    children: (0, a.jsx)(v.iYc, {
                                        className: "icon-sm text-black dark:text-white"
                                    })
                                })
                            })
                        })
                    })]
                })
            }
            var z = (0, g.vU)({
                closeSidebar: {
                    id: "navigation.closeSidebar",
                    defaultMessage: "Close sidebar",
                    description: "Close sidebar button label"
                },
                openSidebar: {
                    id: "navigation.openSidebar",
                    defaultMessage: "Open sidebar",
                    description: "Open sidebar button label"
                }
            })
        },
        42271: function(e, r, n) {
            n.d(r, {
                O: function() {
                    return s
                },
                h: function() {
                    return l
                }
            });
            var t = n(4337),
                i = n(21389);

            function a() {
                var e = (0, t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);
                return a = function() {
                    return e
                }, e
            }

            function o() {
                var e = (0, t._)(["h-11 w-11"]);
                return o = function() {
                    return e
                }, e
            }
            var s = i.Z.button(a()),
                l = i.Z.div(o())
        },
        15329: function(e, r, n) {
            n.d(r, {
                R: function() {
                    return m
                },
                Vq: function() {
                    return g
                },
                ZB: function() {
                    return v
                },
                ZP: function() {
                    return h
                },
                zV: function() {
                    return x
                }
            });
            var t = n(4337),
                i = n(35250),
                a = n(7813),
                o = n(19841),
                s = n(21389);

            function l() {
                var e = (0, t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);
                return l = function() {
                    return e
                }, e
            }

            function c() {
                var e = (0, t._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);
                return c = function() {
                    return e
                }, e
            }

            function u() {
                var e = (0, t._)(["rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)]"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = (0, t._)(["my-1.5 h-px dark:bg-white/20 bg-black/20"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, t._)(["", ""]);
                return f = function() {
                    return e
                }, e
            }

            function h(e) {
                var r = e.onClick,
                    n = e.href,
                    t = e.target,
                    s = e.children;
                return (0, i.jsx)(a.v.Item, {
                    children: function(e) {
                        var a = e.active;
                        return (0, i.jsx)(v, {
                            as: void 0 !== n ? "a" : "button",
                            onClick: r,
                            href: n,
                            target: t,
                            className: (0, o.default)(a ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"),
                            children: s
                        })
                    }
                })
            }
            s.Z.a(l());
            var v = s.Z.a(c()),
                x = (0, s.Z)(v)(u()),
                m = s.Z.div(d()),
                g = (0, s.Z)(v)(f(), function(e) {
                    return e.$active ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                })
        }
    }
]);