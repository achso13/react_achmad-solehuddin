import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FormCoding from "../FormCoding";
import userEvent from "@testing-library/user-event";

describe("FormCoding", () => {
  it("should be able to render FormCoding component", () => {
    render(<FormCoding />);
    // screen.debug();
    expect(screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i));
    expect(screen.getByLabelText(/Nama/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Handphone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Pendidikan/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Kelas Coding/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Foto Surat Kesungguhan/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Harapan/i)).toBeInTheDocument();
  });

  it("should be able to not render error message when value is correct on nama, email and handphone", () => {
    render(<FormCoding />);

    const inputNamaElement = screen.getByLabelText(/nama/i);
    const inputEmailElement = screen.getByLabelText(/email/i);
    const inputHandphoneElement = screen.getByLabelText(/No Handphone/i);

    fireEvent.change(inputNamaElement, {
      target: { value: "Achmad Solehuddin" },
    });
    fireEvent.change(inputEmailElement, {
      target: { value: "achmadsolehuddin23@gmail.com" },
    });
    fireEvent.change(inputHandphoneElement, {
      target: { value: "08123456789" },
    });

    expect(inputNamaElement).toHaveValue("Achmad Solehuddin");
    expect(inputEmailElement).toHaveValue("achmadsolehuddin23@gmail.com");
    expect(inputHandphoneElement).toHaveValue(Number("08123456789"));
  });

  it("should be able to render error message when value is incorrect on nama, email and handphone", () => {
    render(<FormCoding />);
    const inputNamaElement = screen.getByLabelText(/nama/i);
    const inputEmailElement = screen.getByLabelText(/email/i);
    const inputHandphoneElement = screen.getByLabelText(/No Handphone/i);

    fireEvent.change(inputNamaElement, { target: { value: "Achmad123" } });
    fireEvent.change(inputEmailElement, { target: { value: "achmad123" } });
    fireEvent.change(inputHandphoneElement, { target: { value: "123456" } });

    expect(
      screen.getByText(/Nama Lengkap Harus Berupa Huruf/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Email Tidak Sesuai/i)).toBeInTheDocument();
    expect(screen.getByText(/No Handphone Tidak Sesuai/i)).toBeInTheDocument();
  });

  it("should be able to render error message when no handphone value length is > 14 ", () => {
    render(<FormCoding />);

    const inputHandphoneElement = screen.getByLabelText(/No Handphone/i);

    fireEvent.change(inputHandphoneElement, {
      target: { value: "123456789123456789" },
    });

    expect(screen.getByText(/No Handphone Tidak Sesuai/i)).toBeInTheDocument();
  });

  it("should be able submit form with correct value", () => {
    render(<FormCoding />);
    const inputNamaElement = screen.getByLabelText(/nama/i);
    const inputEmailElement = screen.getByLabelText(/email/i);
    const inputHandphoneElement = screen.getByLabelText(/No Handphone/i);
    const inputPendidikanElement = screen.getByLabelText(/pendidikan/i);
    const inputKelasElement = screen.getByLabelText(/Kelas Coding/i);
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const inputSuratElement = screen.getByLabelText(/Foto Surat Kesungguhan/i);
    const inputHarapanElement = screen.getByLabelText(/Harapan/i);

    fireEvent.change(inputNamaElement, {
      target: { value: "Achmad Solehuddin" },
    });
    fireEvent.change(inputEmailElement, {
      target: { value: "achmadsolehuddin23@gmail.com" },
    });
    fireEvent.change(inputHandphoneElement, {
      target: { value: "08123456789" },
    });
    fireEvent.change(inputPendidikanElement, { target: { value: "IT" } });
    fireEvent.change(inputKelasElement, { target: { value: "reactjs" } });
    userEvent.upload(inputSuratElement, file);
    fireEvent.change(inputHarapanElement, {
      target: { value: "Jago" },
    });

    const buttonElement = screen.getByRole("button", { name: /reset/i });

    fireEvent.click(buttonElement);

    expect(inputNamaElement).toHaveValue("");
    expect(inputEmailElement).toHaveValue("");
    expect(inputHandphoneElement).toHaveValue(null);
    expect(inputKelasElement).toHaveValue("");
    expect(inputSuratElement).toHaveValue("");
    expect(inputHarapanElement).toHaveValue("");
  });
});
