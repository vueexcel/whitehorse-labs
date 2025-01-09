import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default function ToastService() {

  const error = (title: string ) => {
    toast.error(title , {
      theme: "auto",
      autoClose: 2000,
    }) ;
  };

  const success = (title: string) => {
    toast.success(title);
  };

  const info = (title: string) => {
    toast.info(title , {
      theme: "auto",
      autoClose: 2000,
    });
  };

  const warning = (title: string) => {
    toast.warning(title);
  };

  return {
    error,
    success,
    info,
    warning,
  };
}
