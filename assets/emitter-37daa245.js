const o="/D-Perfume/assets/d’Perfume-134d1d5c.png";function n(e){return{all:e=e||new Map,on:function(i,s){var t=e.get(i);t?t.push(s):e.set(i,[s])},off:function(i,s){var t=e.get(i);t&&(s?t.splice(t.indexOf(s)>>>0,1):e.set(i,[]))},emit:function(i,s){var t=e.get(i);t&&t.slice().map(function(c){c(s)}),(t=e.get("*"))&&t.slice().map(function(c){c(i,s)})}}}const f=n();export{o as _,f as e};
