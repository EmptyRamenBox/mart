import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.cyan.darken1,
        secondary: colors.blue.accent1,
        tertiary: colors.lightBlue.accent3,
        accent: colors.lime.accent3,
        background: colors.blueGrey.darken1,
      },
    },
  },
});

export default vuetify;
