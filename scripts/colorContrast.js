$(function() {
  $.RGBColor = function (color) {
    this.ok = false;
    // console.log(color)
    // Check for HEX color value.
    // String "#" if found:
    if (color.charAt(0) == '#') {
      color = color.substr(1,6);
    }
    color = color.toLowerCase();


    // Array of color format regex patterns:
    var colorRegex = [
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
        process: function (bits){
          return [
            parseInt(bits[1]),
            parseInt(bits[2]),
            parseInt(bits[3])
          ];
        }
      },
      {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: ['#00ff00', '336699'],
        process: function (bits){
          return [
            parseInt(bits[1], 16),
            parseInt(bits[2], 16),
            parseInt(bits[3], 16)
          ];
        }
      },
      {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: ['#fb0', 'f0f'],
        process: function (bits){
          return [
            parseInt(bits[1] + bits[1], 16),
            parseInt(bits[2] + bits[2], 16),
            parseInt(bits[3] + bits[3], 16)
          ];
        }
      }
    ];

    // Check for a match:
    for (var i = 0; i < 3; i++) {
      var re = colorRegex[i].re;
      var processor = colorRegex[i].process;
      var bits = re.exec(color);
      if (bits) {
        channels = processor(bits);
        this.r = channels[0];
        this.g = channels[1];
        this.b = channels[2];
        this.ok = true;
      }
    }

    // Validate/cleanup values:
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);

    this.toHex = function () {
      var r = this.r.toString(16);
      var g = this.g.toString(16);
      var b = this.b.toString(16);
      if (r.length == 1) r = '0' + r;
      if (g.length == 1) g = '0' + g;
      if (b.length == 1) b = '0' + b;
      return '#' + r + g + b;
    }
  };
  $.calcBrightness = function(color) {
    return Math.sqrt(
       color.r * color.r * .299 +
       color.g * color.g * .587 +
       color.b * color.b * .114);           
  };
});