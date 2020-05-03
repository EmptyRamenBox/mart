import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.cyan.accent4,
        secondary: colors.blue.accent2,
        tertiary: colors.lightBlue.ligthen2,
        accent: colors.lime.accent3,
        background: colors.blueGrey.darken1,
        overlay: colors.indigo.darken3,
      },
    },
  },
});

export default vuetify;
