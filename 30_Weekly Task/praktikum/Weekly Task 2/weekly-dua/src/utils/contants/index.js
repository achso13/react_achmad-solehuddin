import * as Images from "../../assets/images";
import { v4 as uuidv4 } from "uuid";

import * as Fa from "react-icons/fa";
import * as Io from "react-icons/io";

const CONST = {
  taskData: [
    {
      id: uuidv4(),
      slug: "git",
      title: "Git",
      description:
        "Berikut adalah screenshot tugas materi Git, tugasnya adalah melakukan merge dan branching dengan git. Screenshot berikut adalah gambar network diagram yang menggambarkan branchnya.",
      screenshots: Images.Git,
      icon: <Fa.FaGithub />,
    },
    {
      id: uuidv4(),
      slug: "introduction-to-uiux",
      title: "Introduction to UI UX",
      description:
        " Pada tugas ini dilakukan pencarian 3 page pada suatu website. Pada tugas ini saya mengambil studi kasus website soundcloud.com. Ada 3 page yang saya ambil, yaitu home, login dan register, berikut adalah screenshot pagenya.",
      screenshots: Images.Uiux,
      icon: <Io.IoIosColorWand />,
    },
    {
      id: uuidv4(),
      slug: "figma",
      title: "Figma",
      description:
        "Pada tugas figma dilakukan pembuatan prototype website yang telah dipilih pada tugas sebelumnya. Berikut adalah screenshotnya.",
      screenshots: Images.Figma,
      icon: <Fa.FaFigma />,
    },
    {
      id: uuidv4(),
      slug: "html",
      title: "HTML",
      description:
        "Pada tugas HTML membuat form sederhana dengan menggunakan tag pada HTML. Ada 3 page yang dibuat, page home, form dan welcome.",
      screenshots: Images.Html,
      icon: <Fa.FaHtml5 />,
    },
    {
      id: uuidv4(),
      slug: "css",
      title: "CSS",
      description:
        " Pada tugas CSS ada dua yang dibuat, pertama adalah membuat box dengan size dan posisi yang telah ditentukan di soal. Selanjutnya dilakukan pembuatan website blog sederhana dengan navbar yang memiliki hamburger menu. Berikut ini adalah screenshotnya.",
      screenshots: Images.Css,
      icon: <Fa.FaCss3Alt />,
    },
    {
      id: uuidv4(),
      slug: "javascript-refreshment",
      title: "Javascript Refreshment",
      description:
        " Pada tugas javascript dilakukan pengerjaan soal-soal logika dengan menggunakan javascript. Berikut adalah output dari beberapa soal tersebut.",
      screenshots: Images.Javascript,
      icon: <Fa.FaJs />,
    },
    {
      id: uuidv4(),
      slug: "bootstrap",
      title: "Bootstrap",
      description:
        "  Pada tugas Bootstrap dilakukan pembuatan website statis sesuai dengan screenshot yang telah diberikan di soal. Berikut adalah hasilnya.",
      screenshots: Images.Bootstrap,
      icon: <Fa.FaBootstrap />,
    },
    {
      id: uuidv4(),
      slug: "clean-code",
      title: "Clean Code",
      description:
        "Pada tugas clean code diberikan dua problem yang harus diselesaikan. Problem pertama adalah menganalisis kode dan mencari kesalahannya, sedangkan problem kedua memperbaiki kodenya. Berikut ini adalah hasil dari kedua problem yang sudah diperbaiki sehingga kodenya bisa berjalan.",
      screenshots: Images.CleanCode,
      icon: <Fa.FaCode />,
    },
  ],
};

export default CONST;
