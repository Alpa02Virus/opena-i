"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8937], {
        93683: function(e, n, a) {
            a.d(n, {
                Z: function() {
                    return w
                }
            });
            var s = a(21722),
                t = a(39324),
                r = a(22830),
                i = a(75883),
                l = a(35250),
                o = a(95137),
                c = a(78931),
                d = a(50795),
                u = a(82081),
                p = a(9181),
                m = a.n(p),
                f = a(60554),
                g = a(70079),
                x = a(1454),
                b = a(70671),
                h = a(32004),
                v = a(94968),
                y = a(88798),
                A = a(56817),
                C = a(96175),
                j = a(19350),
                P = a(51061);

            function w(e) {
                var n = e.isOpen,
                    a = e.onClose,
                    p = (0, b.Z)(),
                    v = (0, c.hz)(),
                    w = (0, r._)((0, g.useState)(!1), 2),
                    N = w[0],
                    T = w[1],
                    M = (0, f.useRouter)(),
                    k = (0, g.useCallback)(function() {
                        d.o.logEvent(u.a.closeAccountPaymentModal), a()
                    }, [a]),
                    _ = (0, g.useCallback)((0, s._)(function() {
                        var e;
                        return (0, i.Jh)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    T(!0), d.o.logEvent(u.a.clickAccountPaymentCheckout), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), [4, o.ZP.getCheckoutLink()];
                                case 2:
                                    return e = n.sent(), M.push(e.url), [3, 5];
                                case 3:
                                    return n.sent(), y.m.warning(p.formatMessage(S.paymentErrorWarning), {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return T(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [p, M]),
                    I = (0, g.useCallback)((0, s._)(function() {
                        var e;
                        return (0, i.Jh)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    T(!0), d.o.logEvent(u.a.clickAccountCustomerPortal), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), [4, o.ZP.fetchCustomerPortalUrl()];
                                case 2:
                                    return e = n.sent(), M.push(e.url), [3, 5];
                                case 3:
                                    return n.sent(), y.m.warning(p.formatMessage(S.accountErrorWarning), {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return T(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [p, M]),
                    E = (0, g.useCallback)(function() {
                        d.o.logEvent(u.a.clickAccountPaymentGetHelp)
                    }, []),
                    Z = (0, c.YD)(),
                    D = v.has("disable_upgrade_ui");
                return (0, l.jsxs)(C.x, {
                    isOpen: n,
                    onClose: a,
                    children: [(0, l.jsxs)("div", {
                        className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                        children: [(0, l.jsx)("span", {
                            className: "text-base font-semibold sm:text-base",
                            children: (0, l.jsx)(h.Z, (0, t._)({}, S.modalTitle))
                        }), (0, l.jsx)("button", {
                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                            onClick: k,
                            children: (0, l.jsx)(x.q5L, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "grid sm:grid-cols-2",
                        children: [(0, l.jsx)("div", {
                            className: "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                            children: (0, l.jsx)(j.Oi, {
                                rowElements: [(0, l.jsx)(j.Cu, {
                                    text: P.S.free.name
                                }, "row-free-plan-name"), (0, l.jsx)(j.hi, {
                                    variant: "disabled",
                                    disabled: !0,
                                    text: P.S.free.callToAction.active
                                }, "row-free-plan-button"), (0, l.jsx)(j.G, {
                                    variant: "secondary",
                                    text: P.S.free.demandAccess
                                }, "row-free-plan-demand"), (0, l.jsx)(j.G, {
                                    variant: "secondary",
                                    text: P.S.free.responseSpeed
                                }, "row-free-plan-speed"), (0, l.jsx)(j.G, {
                                    className: "sm:pb-2",
                                    variant: "secondary",
                                    text: P.S.free.modelFeatures
                                }, "row-free-plan-updates")]
                            })
                        }), (0, l.jsx)("div", {
                            className: "relative order-1 col-span-1 sm:order-2",
                            children: (0, l.jsx)(j.Oi, {
                                rowElements: [(0, l.jsx)(j.Cu, {
                                    text: P.S.plus.name,
                                    children: (0, l.jsx)("span", {
                                        className: "font-semibold text-gray-500",
                                        children: (0, l.jsx)(h.Z, (0, t._)({}, P.S.plus.costInDollars))
                                    })
                                }, "row-plus-plan-title"), (0, l.jsx)(j.hi, {
                                    variant: "primary",
                                    disabledText: D ? p.formatMessage(S.highDemandDisabledText) : "",
                                    disabled: N,
                                    isLoading: N,
                                    onClick: _,
                                    text: P.S.plus.callToAction.inactivePayment
                                }, "row-plus-plan-button"), (0, l.jsx)(j.G, {
                                    variant: "primary",
                                    text: P.S.plus.demandAccess
                                }, "row-plus-plan-demand"), (0, l.jsx)(j.G, {
                                    variant: "primary",
                                    text: P.S.plus.responseSpeed
                                }, "row-plus-plan-speed"), (0, l.jsx)(j.G, {
                                    className: "sm:pb-2",
                                    variant: "primary",
                                    text: P.S.plus.modelFeatures
                                }, "row-plus-plan-updates"), Z && (0, l.jsx)(j.nR, {
                                    className: "sm:pb-1",
                                    isLoading: N,
                                    text: P.S.manageSubscriptionWeb.callToAction,
                                    onClick: I
                                }, "row-plus-plan-manage"), (0, l.jsx)(m(), {
                                    target: "_blank",
                                    href: A.ti,
                                    onClick: E,
                                    passHref: !0,
                                    children: (0, l.jsx)(j.nR, {
                                        className: "sm:pb-1",
                                        isLoading: !1,
                                        isTextOnly: !0,
                                        text: P.S.getHelp.callToAction
                                    }, "row-plus-plan-help")
                                }, "row-plus-plan-help-link")]
                            })
                        })]
                    })]
                })
            }
            var S = (0, v.vU)({
                paymentErrorWarning: {
                    id: "AccountPaymentModal.paymentErrorWarning",
                    description: "Error toast when payment page has an error",
                    defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
                },
                accountErrorWarning: {
                    id: "AccountPaymentModal.accountErrorWarning",
                    description: "Error toast when account page has an error",
                    defaultMessage: "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
                },
                modalTitle: {
                    id: "AccountPaymentModal.modalTitle",
                    description: "Title for the payment page modal",
                    defaultMessage: "Your plan"
                },
                highDemandDisabledText: {
                    id: "AccountPaymentModal.highDemandDisabledText",
                    description: "Message shown when demand is too high and payments are disabled",
                    defaultMessage: "Due to high demand, we've temporarily paused upgrades."
                }
            })
        },
        96175: function(e, n, a) {
            a.d(n, {
                x: function() {
                    return c
                }
            });
            var s = a(4337),
                t = a(35250),
                r = a(19841),
                i = a(21389),
                l = a(89368);

            function o() {
                var e = (0, s._)(["flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);
                return o = function() {
                    return e
                }, e
            }
            var c = function(e) {
                    var n = e.children,
                        a = e.isOpen,
                        s = e.onClose,
                        i = e.fullWidth;
                    return (0, t.jsx)(l.Z, {
                        size: "fullscreen",
                        isOpen: a,
                        onClose: s,
                        type: "success",
                        className: "focus-none !bg-transparent !shadow-none outline-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
                        children: (0, t.jsx)("div", {
                            className: "focus-none flex h-full flex-col items-center justify-start outline-none",
                            children: (0, t.jsx)("div", {
                                className: (0, r.default)("relative", {
                                    "w-full": void 0 !== i && i
                                }),
                                children: (0, t.jsx)(d, {
                                    children: n
                                })
                            })
                        })
                    })
                },
                d = i.Z.div(o())
        },
        19350: function(e, n, a) {
            a.d(n, {
                Cu: function() {
                    return h
                },
                G: function() {
                    return A
                },
                Oi: function() {
                    return b
                },
                hi: function() {
                    return y
                },
                nR: function() {
                    return C
                }
            });
            var s = a(39324),
                t = a(4337),
                r = a(35250),
                i = a(19841),
                l = a(61888),
                o = a(70079),
                c = a(1454),
                d = a(32004),
                u = a(21389),
                p = a(67273),
                m = a(45635);

            function f() {
                var e = (0, t._)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);
                return f = function() {
                    return e
                }, e
            }

            function g() {
                var e = (0, t._)(["gap-2 flex flex-row justify-start text-sm items-start"]);
                return g = function() {
                    return e
                }, e
            }

            function x() {
                var e = (0, t._)(["text-xl font-semibold justify-between items-center flex"]);
                return x = function() {
                    return e
                }, e
            }
            var b = function(e) {
                    var n = e.rowElements;
                    return (0, r.jsx)(j, {
                        children: n.map(function(e) {
                            return e
                        })
                    })
                },
                h = function(e) {
                    var n = e.className,
                        a = e.text,
                        t = e.children;
                    return (0, r.jsxs)(w, {
                        className: n,
                        children: [(0, r.jsx)(d.Z, (0, s._)({}, a)), t]
                    })
                },
                v = {
                    "primary-disabled": "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
                    primary: "border-none py-3 font-semibold",
                    disabled: "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"
                },
                y = (0, o.forwardRef)(function(e, n) {
                    var a = e.isLoading,
                        t = void 0 !== a && a,
                        l = e.disabled,
                        o = e.onClick,
                        u = e.variant,
                        f = void 0 === u ? "primary" : u,
                        g = e.text,
                        x = e.disabledText;
                    return "" !== x && null != x ? (0, r.jsx)("div", {
                        className: "relative",
                        children: (0, r.jsx)(m.u, {
                            side: "bottom",
                            sideOffset: 20,
                            label: x,
                            usePortal: !1,
                            children: (0, r.jsxs)(p.z, {
                                ref: n,
                                as: "button",
                                color: "disabled",
                                className: (0, i.default)("w-full", v[f]),
                                children: [(0, r.jsx)(d.Z, (0, s._)({}, g)), t && (0, r.jsx)(c.dAq, {
                                    className: "icon-sm animate-spin"
                                })]
                            })
                        })
                    }) : (0, r.jsxs)(p.z, {
                        disabled: void 0 !== l && l,
                        onClick: o,
                        ref: n,
                        as: "button",
                        className: (0, i.default)(v[f]),
                        children: [(0, r.jsx)("span", {
                            className: (0, i.default)("inline-block", {
                                "text-gray-700": "primary-disabled" === f,
                                "text-white": "primary" === f
                            }),
                            children: (0, r.jsx)(d.Z, (0, s._)({}, g))
                        }), t && (0, r.jsx)(c.dAq, {
                            className: "icon-sm animate-spin"
                        })]
                    })
                });
            y.displayName = "PricingPlanButton";
            var A = function(e) {
                    var n = e.variant,
                        a = void 0 === n ? "primary" : n,
                        t = e.className,
                        l = e.text;
                    return (0, r.jsxs)(P, {
                        className: t,
                        children: [(0, r.jsx)(c._rq, {
                            className: (0, i.default)("icon-md", {
                                "text-green-700": "primary" == a,
                                "text-gray-400": "secondary" == a
                            })
                        }), (0, r.jsx)("span", {
                            className: "max-w-[250px]",
                            children: (0, r.jsx)(d.Z, (0, s._)({}, l))
                        })]
                    })
                },
                C = function(e) {
                    var n = e.className,
                        a = e.text,
                        t = e.isLoading,
                        i = e.isTextOnly,
                        u = e.onClick,
                        p = void 0 === u ? l.noop : u,
                        m = "flex flex-row items-center space-x-1 underline",
                        f = (0, o.useMemo)(function() {
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(d.Z, (0, s._)({}, a)), t && (0, r.jsx)(c.dAq, {
                                    className: "icon-sm animate-spin"
                                })]
                            })
                        }, [t, a]);
                    return (0, r.jsx)(P, {
                        className: n,
                        children: void 0 !== i && i ? (0, r.jsx)("div", {
                            className: m,
                            children: f
                        }) : (0, r.jsx)("button", {
                            onClick: p,
                            className: m,
                            children: f
                        })
                    })
                },
                j = u.Z.div(f()),
                P = u.Z.div(g()),
                w = u.Z.div(x())
        },
        51061: function(e, n, a) {
            a.d(n, {
                S: function() {
                    return t
                }
            });
            var s = (0, a(94968).vU)({
                    freeName: {
                        id: "pricingPlanConstants.free.name",
                        defaultMessage: "Free plan",
                        description: "Name of the free pricing plan"
                    },
                    freeActive: {
                        id: "pricingPlanConstants.free.callToAction.active",
                        defaultMessage: "Your current plan",
                        description: "Active call to action for free plan"
                    },
                    freeInactive: {
                        id: "pricingPlanConstants.free.callToAction.inactive",
                        defaultMessage: "Your current plan",
                        description: "Inactive call to action for free plan"
                    },
                    freeCost: {
                        id: "pricingPlanConstants.free.costInDollars",
                        defaultMessage: " ",
                        description: "Cost for free plan"
                    },
                    freeAccess: {
                        id: "pricingPlanConstants.free.demandAccess",
                        defaultMessage: "Access to our GPT-3.5 model",
                        description: "Access rights for free plan"
                    },
                    freeSpeed: {
                        id: "pricingPlanConstants.free.responseSpeed",
                        defaultMessage: "Standard response speed",
                        description: "Response speed for free plan"
                    },
                    freeFeatures: {
                        id: "pricingPlanConstants.free.modelFeatures",
                        defaultMessage: "Regular model updates",
                        description: "Model features for free plan"
                    },
                    plusName: {
                        id: "pricingPlanConstants.plus.name",
                        defaultMessage: "ChatGPT Plus",
                        description: "Name of the ChatGPT Plus pricing plan"
                    },
                    plusActive: {
                        id: "pricingPlanConstants.plus.callToAction.active",
                        defaultMessage: "Your current plan",
                        description: "Active call to action for plus plan"
                    },
                    plusInactive: {
                        id: "pricingPlanConstants.plus.callToAction.inactive",
                        defaultMessage: "I'm interested",
                        description: "Inactive call to action for plus plan"
                    },
                    plusInactivePayment: {
                        id: "pricingPlanConstants.plus.callToAction.inactivePayment",
                        defaultMessage: "Upgrade to Plus",
                        description: "Inactive payment call to action for plus plan"
                    },
                    plusCost: {
                        id: "pricingPlanConstants.plus.costInDollars",
                        defaultMessage: "USD $20/mo",
                        description: "Cost for plus plan"
                    },
                    plusAccess: {
                        id: "pricingPlanConstants.plus.demandAccess",
                        defaultMessage: "Access to GPT-4, our most capable model",
                        description: "Access rights for plus plan"
                    },
                    plusSpeed: {
                        id: "pricingPlanConstants.plus.responseSpeed",
                        defaultMessage: "Faster response speed",
                        description: "Response speed for plus plan"
                    },
                    plusFeatures: {
                        id: "pricingPlanConstants.plus.modelFeatures",
                        defaultMessage: "Exclusive access to features like Plugins and Advanced Data Analysis",
                        description: "Model features for plus plan"
                    },
                    manageSubscriptionWeb: {
                        id: "pricingPlanConstants.manageSubscriptionWeb.callToAction",
                        defaultMessage: "Manage my subscription",
                        description: "Web subscription management"
                    },
                    manageSubscriptionIos: {
                        id: "pricingPlanConstants.manageSubscriptionIos.callToAction",
                        defaultMessage: "Manage my subscription in the ChatGPT iOS app",
                        description: "iOS subscription management"
                    },
                    manageSubscriptionAndroid: {
                        id: "pricingPlanConstants.manageSubscriptionAndroid.callToAction",
                        defaultMessage: "Manage my subscription in the ChatGPT Android app",
                        description: "Android subscription management"
                    },
                    getHelp: {
                        id: "pricingPlanConstants.getHelp.callToAction",
                        defaultMessage: "I need help with a billing issue",
                        description: "Help for billing issues"
                    },
                    business: {
                        id: "pricingPlanConstants.business.callToAction",
                        defaultMessage: "Buy for my team",
                        description: "Business purchase call to action"
                    }
                }),
                t = {
                    free: {
                        name: s.freeName,
                        callToAction: {
                            active: s.freeActive,
                            inactive: s.freeInactive
                        },
                        costInDollars: s.freeCost,
                        demandAccess: s.freeAccess,
                        responseSpeed: s.freeSpeed,
                        modelFeatures: s.freeFeatures
                    },
                    plus: {
                        name: s.plusName,
                        callToAction: {
                            active: s.plusActive,
                            inactive: s.plusInactive,
                            inactivePayment: s.plusInactivePayment
                        },
                        costInDollars: s.plusCost,
                        demandAccess: s.plusAccess,
                        responseSpeed: s.plusSpeed,
                        modelFeatures: s.plusFeatures
                    },
                    manageSubscriptionWeb: {
                        callToAction: s.manageSubscriptionWeb
                    },
                    manageSubscriptionIos: {
                        callToAction: s.manageSubscriptionIos
                    },
                    manageSubscriptionAndroid: {
                        callToAction: s.manageSubscriptionAndroid
                    },
                    getHelp: {
                        callToAction: s.getHelp
                    },
                    business: {
                        callToAction: s.business
                    }
                }
        },
        21739: function(e, n, a) {
            a.d(n, {
                g: function() {
                    return o
                }
            });
            var s = a(96237),
                t = a(39324),
                r = a(71209),
                i = a(78103),
                l = {
                    flags: {
                        isUserInCanPayGroup: !1,
                        failwhaleBypassEnabled: !1,
                        sharingEnabled: !1
                    }
                },
                o = (0, i.ZP)()(function(e, n) {
                    return (0, r._)((0, t._)({}, l), {
                        updateFlagValue: function(a, i) {
                            var l = n().flags;
                            e({
                                flags: (0, r._)((0, t._)({}, l), (0, s._)({}, a, i))
                            })
                        }
                    })
                })
        }
    }
]);