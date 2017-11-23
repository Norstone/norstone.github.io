$(function($, global) {
  // Initialize shopify buttons
  if (!ShopifyBuy || !ShopifyBuy.UI) {
    console.warn('Shopify is not detected');
    return;
  }

  var client = ShopifyBuy.buildClient({
    domain: 'norstone-usa.myshopify.com',
    apiKey: 'b0c0d7f91ced8614ab98d13aa823d9ed',
    appId: '6',
  });

  ShopifyBuy.UI.onReady(client).then(initializeButtons);
  
  function initializeButtons(ui) {
    var buttons = $('.shopify-add-to-cart');
    if (buttons.length <= 0) {
      return;
    }

    var options = {
      "product": {
        "variantId": "all",
        "width": "240px",
        "contents": {
          "img": false,
          "imgWithCarousel": false,
          "title": false,
          "variantTitle": false,
          "price": false,
          "description": false,
          "buttonWithQuantity": true,
          "button": false,
          "quantity": false
        },
        "text": {
          "button": "ADD A SAMPLE TO CART"
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "background-color": "#4fb1d5",
            "font-family": "Open Sans, sans-serif",
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            "padding-left": "20px",
            "padding-right": "20px",
            ":hover": {
              "background-color": "#479fc0"
            },
            "border-radius": "2px",
            ":focus": {
              "background-color": "#479fc0"
            },
            "font-weight": "normal"
          },
          "variantTitle": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "title": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "description": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          },
          "compareAt": {
            "font-size": "12px",
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          }
        },
        "googleFonts": [
          "Open Sans",
          "Open Sans",
          "Open Sans",
          "Open Sans",
          "Open Sans",
          "Open Sans"
        ]
      },
      "cart": {
        "contents": {
          "button": true
        },
        "styles": {
          "button": {
            "background-color": "#4fb1d5",
            "font-family": "Open Sans, sans-serif",
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#479fc0"
            },
            "border-radius": "2px",
            ":focus": {
              "background-color": "#479fc0"
            },
            "font-weight": "normal"
          },
          "footer": {
            "background-color": "#ffffff"
          }
        },
        "googleFonts": [
          "Open Sans"
        ]
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "variantTitle": false,
          "buttonWithQuantity": true,
          "button": false,
          "quantity": false
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "background-color": "#4fb1d5",
            "font-family": "Open Sans, sans-serif",
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            "padding-left": "20px",
            "padding-right": "20px",
            ":hover": {
              "background-color": "#479fc0"
            },
            "border-radius": "2px",
            ":focus": {
              "background-color": "#479fc0"
            },
            "font-weight": "normal"
          },
          "variantTitle": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "title": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "description": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "normal"
          }
        },
        "googleFonts": [
          "Open Sans",
          "Open Sans",
          "Open Sans",
          "Open Sans",
          "Open Sans",
          "Open Sans"
        ]
      },
      "toggle": {
        "styles": {
          "toggle": {
            "font-family": "Open Sans, sans-serif",
            "background-color": "#4fb1d5",
            ":hover": {
              "background-color": "#479fc0"
            },
            ":focus": {
              "background-color": "#479fc0"
            },
            "font-weight": "normal"
          },
          "count": {
            "font-size": "13px"
          }
        },
        "googleFonts": [
          "Open Sans"
        ]
      },
      "option": {
        "styles": {
          "label": {
            "font-family": "Open Sans, sans-serif"
          },
          "select": {
            "font-family": "Open Sans, sans-serif"
          }
        },
        "googleFonts": [
          "Open Sans",
          "Open Sans"
        ]
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      }
    };

    buttons.each(function (index, element) {
      var productId = element.dataset.productId;
      if (productId) {
        ui.createComponent('product', {
          id: [productId],
          node: element,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: options,
        });
      }
    });
  }

}(jQuery, window));
