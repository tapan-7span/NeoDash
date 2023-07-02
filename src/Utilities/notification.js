import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      toast: useToast(),
      config: {
        position: "top-right",
        timeout: 3359,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      },
    };
  },
  methods: {
    successToast(message) {
      this.toast.success(message, this.config);
    },
    errorToast(message) {
      this.toast.error(message, this.config);
    },
    infoToast(message) {
      this.toast.info(message, this.config);
    },
    warningToast(message) {
      this.toast.warning(message, this.config);
    },
  },
};
