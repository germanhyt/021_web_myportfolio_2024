import Swal, { type SweetAlertResult } from "sweetalert2";

interface SwalOptions {
  title?: string;
  html: string;
  customClass?: {
    confirmButton: string;
    cancelButton: string;
    denyButton: string;
  };
  buttonsStyling?: boolean;
  icon?: string;
  showDenyButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  denyButtonText?: string;
}

const optionsAlert: SwalOptions = {
  title: "PUNTOZIP",
  html: "PUNTOZIP S.A.C",
  customClass: {
    confirmButton: "btn btn-primary mx-1",
    cancelButton: "btn btn-danger mx-1",
    denyButton: "btn btn-warning mx-1",
  },
  buttonsStyling: false,
  confirmButtonText: "confirmar",
  cancelButtonText: "cancelar",
  denyButtonText: "denegar",
};

const extend = (...args: SwalOptions[]): Record<string, unknown> =>
  args.reduce((a, b) => Object.assign(a, b), {});

const swalAlertConfirm = async (
  message?: string,
  title?: string
): Promise<SweetAlertResult> => {
  const selectOptions: SwalOptions = {
    title: title ?? optionsAlert.title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "confirmar",
    cancelButtonText: "cancelar",
    html: message ?? optionsAlert.html,
  };

  const currentOptions = extend(optionsAlert, selectOptions);

  return await Swal.fire(currentOptions);
};

const swalAlertInfo = async (
  message?: string,
  title?: string
): Promise<SweetAlertResult> => {
  const selectOptions: SwalOptions = {
    title: title ?? optionsAlert.title,
    icon: "info",
    showCancelButton: false,
    confirmButtonText: "Ok",
    html: message ?? optionsAlert.html,
  };

  const currentOptions = extend(optionsAlert, selectOptions);

  return await Swal.fire(currentOptions);
};

const swalAlertConfirmOrDeny = async (
  message?: string,
  title?: string
): Promise<SweetAlertResult> => {
  const selectOptions: SwalOptions = {
    title: title ?? optionsAlert.title,
    icon: "warning",
    showCancelButton: true,
    showDenyButton: true,
    confirmButtonText: "confirmar",
    cancelButtonText: "cancelar",
    denyButtonText: "denegar",
    html: message ?? optionsAlert.html,
  };

  const currentOptions = extend(optionsAlert, selectOptions);

  return await Swal.fire(currentOptions);
};

const swalAlertFire = async (
  selectOptions: SwalOptions
): Promise<SweetAlertResult> => {
  const currentOptions = extend(optionsAlert, selectOptions);

  return await Swal.fire(currentOptions);
};

export {
  swalAlertConfirm,
  swalAlertInfo,
  swalAlertConfirmOrDeny,
  swalAlertFire,
  type SwalOptions,
};
