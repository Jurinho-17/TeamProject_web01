var simplemaps_continentmap_mapdata={
  main_settings: {
    //General settings
		width: "1000", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "none",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    SA: {
      name: "South America",
      description: "South America is a continent in the Western Hemisphere, mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It may also be considered a subcontinent of the Americas, which is how it is viewed in most of Europe and the Spanish and Portuguese-speaking regions of the Americas.",
      color: "#CC33FF",
      hover_color: "#751d92",
      url: "Jaguar.html"
    },
    NA: {
      name: "North America",
      description: "North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere.",
      color: "#3366FF",
      hover_color: "#1c388c",
      url: "Wood Turtle.html"
    },
    EU: {
      name: "Europe",
      description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.",
      color: "#FF3366",
      hover_color: "#c0264d",
      url: "Rupicapra.html"
    },
    AF: {
      name: "Africa",
      description: "Africa is the world's second-largest and second-most populous continent, after Asia. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area.",
      color: "#33FF66",
      hover_color: "#1a8535",
      url: "Pangolin.html"
    },
    NS: {
      name: "North Asia",
      description: "North Asia or Northern Asia, sometimes also referred to as Siberia, is a sub-region of Asia, consisting of the Russian regions east of the Ural Mountains: Ural, Siberia and the Russian Far East.",
      color: "#33FFCC",
      hover_color: "#23b28e",
      url: "Asiatic Black Bear.html"
    },
    SS: {
      name: "South Asia",
      description: "South Asia or Southern Asia, is the southern region of the Asian continent, which comprises the sub-Himalayan countries and, for some authorities, adjoining countries to the west and east.",
      color: "#FF6633",
      hover_color: "#ac4422",
      url: "Fishing cat.html"
    },
    ME: {
      name: "Middle East",
      description: "The Middle East is a transcontinental region which generally includes Western Asia (except for Transcaucasia) and all of Egypt (mostly in North Africa), Turkey (partly in Europe), and Iran (a part of South Asia per the UN geoscheme[2])",
      color: "#FFCC33",
      hover_color: "#bb9525",
      url: "Oryx.html"
    },
    OC: {
      name: "Oceania",
      description: "Oceania is a geographic region that includes Australasia, Melanesia, Micronesia and Polynesia.",
      color: "#FF33CC",
      hover_color: "#b1238d",
      url: "Ghost Bat.html"
    }
  },
  locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74.0059731,
      description: "default",
      color: "none",
      url: "default",
      size: "default"
    },
    "1": {
      name: "London",
      lat: 51.5073346,
      lng: -0.1276831,
      description: "default",
      color: "none",
      url: "default"
    }
  },
  labels: {}
};