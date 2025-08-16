var scrollSpy = {
  settings: {
    sectionSelector: "section",
    navSelector: ".nav-link",
    padding: 5,
    borderRadius: "5px",
    offset: 150,
    activeClass: "active-scrollspy",
    bgColor: "",
    textColor: "#59110cff",
    fontWeight: "bolder",
    underline: false,
    underlineColor: "blue",
    underlineOffset: "2px",
  },

  init: function (options) {
    if (options) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          this.settings[key] = options[key];
        }
      }
    }

    this.sections = document.querySelectorAll(this.settings.sectionSelector);
    this.navLinks = document.querySelectorAll(this.settings.navSelector);

    this.bindEvents();
    this.onScroll(); // run first time
  },

  bindEvents: function () {
    var self = this;
    window.addEventListener("scroll", function () {
      self.onScroll();
    });
  },

  onScroll: function () {
    var current = "";
    var scrollPos = window.pageYOffset;

    for (var i = 0; i < this.sections.length; i++) {
      var section = this.sections[i];
      if (scrollPos >= section.offsetTop - this.settings.offset) {
        current = section.getAttribute("id");
      }
    }

    for (var j = 0; j < this.navLinks.length; j++) {
      var link = this.navLinks[j];
      var href = link.getAttribute("href").replace("#", "");

      if (href === current) {
        link.classList.add(this.settings.activeClass);

        // reset dulu semua style
        link.style.removeProperty("background-color");
        link.style.removeProperty("color");
        link.style.removeProperty("font-weight");
        link.style.removeProperty("text-decoration");

        // apply style pakai !important
        link.style.setProperty(
          "background-color",
          this.settings.bgColor,
          "important"
        );
        if (this.settings.textColor) {
          link.style.setProperty("color", this.settings.textColor, "important");
        }
        if (this.settings.fontWeight) {
          link.style.setProperty(
            "font-weight",
            this.settings.fontWeight,
            "important"
          );
        }

        // underline opsional
        if (this.settings.underline) {
          var underlineStyle = "underline " + this.settings.underlineColor;
          link.style.setProperty(
            "text-decoration",
            underlineStyle,
            "important"
          );

          link.style.setProperty(
            "text-underline-offset",
            this.settings.underlineOffset,
            "important"
          );
        }
      } else {
        link.classList.remove(this.settings.activeClass);

        // reset style ketika tidak aktif
        link.style.removeProperty("background-color");
        link.style.removeProperty("color");
        link.style.removeProperty("font-weight");
        link.style.removeProperty("text-decoration");
      }
    }
  },
};
