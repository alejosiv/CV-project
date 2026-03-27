/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import html2pdf from 'html2pdf.js';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  User, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  CheckCircle2,
  Download,
  Mail,
  CreditCard
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

import html2pdf from 'html2pdf.js';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const opt = {
      margin: [0, 0, 0, 0],
      filename: 'CV_Jesus_Sivira.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
        scrollY: 0
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Temporarily hide print-only elements and adjust styles for PDF generation
    html2pdf().set(opt).from(element).save();
  };

  const handleDownloadCode = () => {
    const code = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Este es el código fuente principal de tu CV interactivo.
// Puedes usarlo en cualquier proyecto de React + Tailwind CSS.

${document.documentElement.outerHTML}`; // This is a bit hacky but gives them the full HTML/JS context
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'App_Source_Code.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportWord = () => {
    const header = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'>
      <style>
        @page { size: A4; margin: 1cm; }
        body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; margin: 0; padding: 0; }
        .header { background-color: #0f172a; color: #ffffff; padding: 30pt; }
        .name { font-size: 28pt; font-weight: bold; margin-bottom: 5pt; color: #ffffff; }
        .contact-info { font-size: 9pt; color: #cbd5e1; }
        .main-table { width: 100%; border-collapse: collapse; margin-top: 20pt; }
        .left-col { width: 33%; vertical-align: top; padding-right: 20pt; }
        .right-col { width: 67%; vertical-align: top; border-left: 1px solid #e2e8f0; padding-left: 20pt; }
        .section-title { font-size: 10pt; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 1pt; border-bottom: 1px solid #e2e8f0; padding-bottom: 5pt; margin-bottom: 15pt; margin-top: 20pt; }
        .item-title { font-size: 11pt; font-weight: bold; color: #0f172a; margin-bottom: 2pt; }
        .item-subtitle { font-size: 10pt; color: #64748b; font-weight: 500; margin-bottom: 5pt; }
        .item-period { font-size: 9pt; color: #94a3b8; margin-bottom: 5pt; }
        .bullet { font-size: 10pt; color: #475569; margin-bottom: 3pt; }
        .skill-item { font-size: 10pt; color: #475569; margin-bottom: 5pt; }
        .footer { font-size: 8pt; color: #94a3b8; text-align: center; margin-top: 40pt; border-top: 1px solid #f1f5f9; padding-top: 10pt; }
      </style>
      </head><body>
        <div class="header">
          <div class="name">Jesús Alejandro Sivira Rodríguez</div>
          <div class="contact-info">
            Caracas, Distrito Capital | (0424) 235-1192 | V-21.377-034 | 27/08/1992
          </div>
        </div>

        <table class="main-table">
          <tr>
            <td class="left-col">
              <div class="section-title">Perfil</div>
              <p class="bullet">Estudiante de Contaduría Pública con sólida experiencia técnica en gestión fiscal y contable. Capacidad demostrada en conciliaciones bancarias, declaraciones de impuestos y cumplimiento de libros legales, con un enfoque en la eficiencia de procesos y prevención de riesgos fiscales.</p>
              
              <div class="section-title">Idiomas</div>
              <div class="item-title">Italiano</div>
              <div class="item-subtitle">Avanzado (FUNDEIM-UCV)</div>
              <br>
              <div class="item-title">Inglés</div>
              <div class="item-subtitle">Intermedio (Fyr Lois Institute)</div>

              <div class="section-title">Competencias</div>
              <div class="bullet">• Capacidad de adaptación</div>
              <div class="bullet">• Puntualidad</div>
              <div class="bullet">• Responsabilidad</div>
              <div class="bullet">• Trabajo bajo presión</div>
            </td>
            <td class="right-col">
              <div class="section-title">Experiencia Laboral</div>
              
              <div class="item-title">Analista Contable</div>
              <div class="item-subtitle">Mundo Contable LS</div>
              <div class="item-period">Febrero 2025 – Marzo 2026</div>
              <div class="bullet">• Ejecución de declaraciones fiscales ante el SENIAT y alcaldías de manera quincenal y mensual.</div>
              <div class="bullet">• Realización de conciliaciones bancarias y gestión de la contabilidad completa mensual.</div>
              <div class="bullet">• Gestión de incidencias de períodos anteriores para evitar multas en procesos de fiscalización.</div>
              <br>

              <div class="item-title">Transcriptor / Encargado de Libros Fiscales</div>
              <div class="item-subtitle">Mundo Contable LS</div>
              <div class="item-period">Diciembre 2024 – Febrero 2025</div>
              <div class="bullet">• Transcripción de datos de compras y ventas para la cartera de clientes de la firma.</div>
              <div class="bullet">• Responsable del cierre contable mensual y la impresión rigurosa de los libros legales.</div>
              <br>

              <div class="item-title">Auxiliar de Inventario y Ventas</div>
              <div class="item-subtitle">Prolicor C.A.</div>
              <div class="item-period">2023 – 2024</div>
              <div class="bullet">• Distribución de mercancía y atención directa a la clientela.</div>
              <div class="bullet">• Control diario de inventario y optimización de publicaciones.</div>
              <br>

              <div class="section-title">Formación Académica</div>
              <div class="item-title">Licenciatura en Contaduría Pública</div>
              <div class="item-subtitle">Universidad Central de Venezuela</div>
              <div class="item-period">Marzo 2025 – Actualidad</div>
              <br>
              <div class="item-title">Auxiliar Contable</div>
              <div class="item-subtitle">Centro de Contadores</div>
              <div class="item-period">2024 – Actualidad</div>
            </td>
          </tr>
        </table>
        
        <div class="footer">
          © 2026 Jesús Alejandro Sivira Rodríguez • Caracas, Venezuela
        </div>
      </body></html>`;
    
    const blob = new Blob(['\ufeff', header], {
      type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Jesus_Sivira.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      {/* Floating Download Controls (Desktop) */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50 print:hidden">
        <button 
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-slate-800 transition-all hover:scale-105 group"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          <span className="font-medium">Descarga Directa PDF</span>
        </button>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-full shadow-md hover:bg-slate-200 transition-all text-xs"
        >
          <Mail className="w-4 h-4" />
          <span>Impresión (Máxima Calidad)</span>
        </button>
        <button 
          onClick={handleExportWord}
          className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-full shadow-2xl hover:bg-slate-50 transition-all hover:scale-105 group"
        >
          <Mail className="w-5 h-5 group-hover:rotate-12" />
          <span className="font-medium">Exportar .DOC</span>
        </button>
        <button 
          onClick={handleDownloadCode}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-2xl hover:bg-indigo-700 transition-all hover:scale-105 group"
        >
          <CreditCard className="w-5 h-5" />
          <span className="font-medium">Descargar Código</span>
        </button>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        id="resume-content"
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100"
      >
        {/* Header Section */}
        <header className="bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full -mr-32 -mt-32 opacity-50" />
          <div className="relative z-10">
            <motion.h1 variants={item} className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Jesús Alejandro Sivira Rodríguez
            </motion.h1>
            <motion.div variants={item} className="flex flex-wrap gap-4 text-slate-300 text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Caracas, Distrito Capital
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> (0424) 235-1192
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" /> V-21.377-034
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> 27/08/1992
              </span>
            </motion.div>
          </div>
          
          <button 
            onClick={handlePrint}
            className="absolute top-8 right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors print:hidden"
            title="Imprimir CV"
          >
            <Download className="w-5 h-5" />
          </button>
        </header>

        <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Profile & Skills */}
          <div className="lg:col-span-1 space-y-12">
            <motion.section variants={item} className="resume-section">
              <h2 className="section-title"><User className="w-4 h-4" /> Perfil</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Estudiante de Contaduría Pública con sólida experiencia técnica en gestión fiscal y contable. 
                Capacidad demostrada en conciliaciones bancarias, declaraciones de impuestos y cumplimiento de libros legales, 
                con un enfoque en la eficiencia de procesos y prevención de riesgos fiscales.
              </p>
            </motion.section>

            <motion.section variants={item} className="resume-section">
              <h2 className="section-title"><Languages className="w-4 h-4" /> Idiomas</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Italiano</span>
                    <span className="text-xs text-slate-500">Avanzado</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full">
                    <div className="bg-slate-900 h-1.5 rounded-full w-[90%]" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">FUNDEIM-UCV</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Inglés</span>
                    <span className="text-xs text-slate-500">Intermedio</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full">
                    <div className="bg-slate-900 h-1.5 rounded-full w-[65%]" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Fyr Lois Institute</p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={item} className="resume-section">
              <h2 className="section-title"><CheckCircle2 className="w-4 h-4" /> Competencias</h2>
              <ul className="space-y-2">
                {['Capacidad de adaptación', 'Puntualidad', 'Responsabilidad', 'Trabajo bajo presión'].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section variants={item} className="resume-section">
              <h2 className="section-title"><Briefcase className="w-4 h-4" /> Experiencia Laboral</h2>
              <div className="space-y-10">
                <ExperienceItem 
                  title="Analista Contable"
                  company="Mundo Contable LS"
                  period="Febrero 2025 – Marzo 2026"
                  achievements={[
                    "Ejecución de declaraciones fiscales ante el SENIAT y alcaldías de manera quincenal y mensual.",
                    "Realización de conciliaciones bancarias y gestión de la contabilidad completa mensual.",
                    "Gestión de incidencias de períodos anteriores para evitar multas en procesos de fiscalización."
                  ]}
                />
                <ExperienceItem 
                  title="Transcriptor / Encargado de Libros Fiscales"
                  company="Mundo Contable LS"
                  period="Diciembre 2024 – Febrero 2025"
                  achievements={[
                    "Transcripción de datos de compras y ventas para la cartera de clientes de la firma.",
                    "Responsable del cierre contable mensual y la impresión rigurosa de los libros legales."
                  ]}
                />
                <ExperienceItem 
                  title="Auxiliar de Inventario y Ventas"
                  company="Prolicor C.A."
                  period="2023 – 2024"
                  achievements={[
                    "Distribución de mercancía y atención directa a la clientela.",
                    "Control diario de inventario y optimización de publicaciones."
                  ]}
                />
                <ExperienceItem 
                  title="Freelancer (Gestión de Redes y E-Commerce)"
                  company="Independiente"
                  period="2016 – 2022"
                  achievements={[
                    "Asesoría y apoyo preventa/posventa para tiendas online y portales inmobiliarios.",
                    "Monitoreo y seguimiento de inmuebles en diversas plataformas sociales."
                  ]}
                />
                <ExperienceItem 
                  title="Atención y Facturación"
                  company="Ferretotal C.A."
                  period="2012 – 2014"
                  achievements={[
                    "Recepción de mercancía, codificación y atención al cliente.",
                    "Responsable de facturación, despacho y cuadre de caja diario."
                  ]}
                />
              </div>
            </motion.section>

            <motion.section variants={item} className="resume-section">
              <h2 className="section-title"><GraduationCap className="w-4 h-4" /> Formación Académica</h2>
              <div className="space-y-6">
                <EducationItem 
                  degree="Licenciatura en Contaduría Pública"
                  institution="Universidad Central de Venezuela"
                  period="Marzo 2025 – Actualidad"
                />
                <EducationItem 
                  degree="Auxiliar Contable"
                  institution="Centro de Contadores"
                  period="2024 – Actualidad"
                />
                <EducationItem 
                  degree="Licenciatura en Ciencias Estadísticas"
                  institution="Universidad Central de Venezuela"
                  period="2015 – 2019 (Pausado)"
                />
              </div>
            </motion.section>
          </div>
        </div>

        <footer className="bg-slate-50 border-t border-slate-100 p-8 text-center text-slate-400 text-xs">
          <p>© 2026 Jesús Alejandro Sivira Rodríguez • Caracas, Venezuela</p>
        </footer>
      </motion.div>
    </div>
  );
}

function ExperienceItem({ title, company, period, achievements }: { 
  title: string, 
  company: string, 
  period: string, 
  achievements: string[] 
}) {
  return (
    <div className="relative pl-6 border-l-2 border-slate-100">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-900" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="text-sm font-medium text-slate-500">{company}</p>
        </div>
        <span className="text-xs font-medium text-slate-400 mt-1 sm:mt-0">{period}</span>
      </div>
      <ul className="space-y-1.5">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-sm text-slate-600 leading-relaxed">
            • {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationItem({ degree, institution, period }: { 
  degree: string, 
  institution: string, 
  period: string 
}) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="text-sm font-bold text-slate-900">{degree}</h3>
        <p className="text-xs text-slate-500">{institution}</p>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap bg-slate-100 px-2 py-1 rounded">
        {period}
      </span>
    </div>
  );
}
