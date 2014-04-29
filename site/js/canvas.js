	
			if(Modernizr.canvas) {
				
				var wrapper = document.getElementById('wrapper'),
				loading	= document.createElement('div');
			
				loading.className = 'loading';
				loading.setAttribute('id','loading');
				loading.innerHTML = 'Loading...';

				wrapper.appendChild(loading);
				
				google.load('webfont','1');
				google.setOnLoadCallback(function() {
					WebFont.load({
						google: {
							families: ['Archivo Black']
						},
						/* Called when each requested web font has finished loading. The fontFamily parameter is the name of the font family, and fontDescription represents the style and weight of the font. */
						active: function(fontFamily, fontDescription) {
							setTimeout(function() {
								
								loading.style.display = 'none';
								
								var banner = new Banner();
								banner.initialize('canvas-banner');
								
								document.getElementById('font').style.display = 'block';
								
							}, 1000);
						},
						inactive: function() {
							
							// google font not loaded, we will use the default font : Arial (set in baner.js file)
							loading.style.display = 'none';
							
							var banner = new Banner();
							banner.initialize('canvas-banner');
							
						}
					});
				});
				
			}