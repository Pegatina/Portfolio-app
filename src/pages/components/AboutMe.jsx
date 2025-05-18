import { useEffect, useRef, useState, useMemo } from "react";
import { pdfjs, Document, Page } from "react-pdf";

// Estilos necesarios para mostrar correctamente las capas de texto y anotaciones del PDF (evitando errores de consola)
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Se configura la ruta del worker de PDF.js para que funcione correctamente
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const AboutMe = () => {
  const [pdfData, setPdfData] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Se carga el PDF desde la carpeta 'public'
  useEffect(() => {
    fetch("/CV/CV.pdf")
      .then((res) => res.arrayBuffer()) //Se convierte a binario
      .then((buffer) => {
        const uint8Arr = new Uint8Array(buffer);
        setPdfData((oldData) => {
          if (
            oldData &&
            oldData.length === uint8Arr.length &&
            oldData.every((v, i) => v === uint8Arr[i])
          ) {
            return oldData;
          }
          return uint8Arr;
        });
      }) // Se guarda el PDF en formato Uint8Array para que lo pueda leer la librería
      .catch((err) => console.error("Error al cargar el PDF:", err));
  }, []);

    // Se actualiza de forma dinámica si el ancho del contenedor cambia.
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.floor(entry.contentRect.width);
       // Solo actualiza si el nuevo ancho es significativamente diferente
      setContainerWidth((prev) => (Math.abs(prev - width) > 1 ? width : prev));
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect(); // Se limpia el observer al salir del componente.
  }, []);

  // Se memoriza el objeto `file` para evitar recargas innecesarias del PDF
  const file = useMemo(() => (pdfData ? { data: pdfData } : null), [pdfData]);

  // Función para descargar el PDF usando la URL pública, para que lo visualicen mejor en dispositivos más pequeños.
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/CV/CV.pdf";
      link.download = "CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
  return (
    <div
      ref={containerRef}
       className="scroll-bootstrap"
      style={{
        width: "100%",
        height: "90vh",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "1rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {file ? (
        <>
        <Document file={file} loading="Cargando PDF...">
              <Page
                pageNumber={1}
                width={containerWidth}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
        </Document>
           <button
           onClick={handleDownload}
           className="btn btn-navbar-purple"
           style={{
             marginTop: "1rem",
             padding: "0.5rem 1rem",
             fontSize: "1rem",
             cursor: "pointer",
           }}
         >
           Descargar PDF
         </button>
         </>
      ) : (
        <p>Cargando PDF...</p>
      )}      
    </div>
  );
};

export default AboutMe;
