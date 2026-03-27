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

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const opt = {
      margin: [0, 0, 0, 0] as [number, number, number, number],
      filename: 'CV_Jesus_Sivira.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
        scrollY: 0
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
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
          <div class="name">Jesus Alejandro Sivira Rodríguez</div>
          <div class="contact-info">
            Caracas, Distrito Capital | (0424) 235-1192 | V-21.377-034 | 27/08/1992
          </div>
        </div>

        <table class="main-table">
          <tr>
            <td colspan="2">
              <div class="section-title">Perfil Profesional</div>
              <p class="bullet">Estudiante de Contaduría Pública con sólida experiencia técnica en gestión fiscal y contable. Capacidad demostrada en conciliaciones bancarias, declaraciones de impuestos y cumplimiento de libros legales, con un enfoque en la eficiencia de procesos y prevención de riesgos fiscales.</p>
              
              <div class="section-title">Experiencia Laboral</div>
              <div class="item-title">Analista Contable</div>
              <div class="item-subtitle">Mundo Contable LS | Febrero 2025 – Marzo 2026</div>
              <div class="bullet">• Ejecución de declaraciones fiscales ante el SENIAT y alcaldías de manera quincenal y mensual.</div>
              <div class="bullet">• Realización de conciliaciones bancarias y gestión de la contabilidad completa mensual.</div>
              <div class="bullet">• Gestión de incidencias de períodos anteriores para evitar multas en procesos de fiscalización.</div>
              <br>

              <div class="item-title">Transcriptor / Encargado de Libros Fiscales</div>
              <div class="item-subtitle">Mundo Contable LS | Diciembre 2024 – Febrero 2025</div>
              <div class="bullet">• Transcripción de datos de compras y ventas para la cartera de clientes de la firma.</div>
              <div class="bullet">• Responsable del cierre contable mensual y la impresión rigurosa de los libros legales.</div>
              <br>

              <div class="item-title">Auxiliar de Inventario y Ventas</div>
              <div class="item-subtitle">Prolicor C.A. | 2023 – 2024</div>
              <div class="bullet">• Distribución de mercancía y atención directa a la clientela.</div>
              <div class="bullet">• Control diario de inventario y optimización de publicaciones.</div>
              <br>

              <div class="item-title">Freelancer (Gestión de Redes y E-Commerce)</div>
              <div class="item-subtitle">Independiente | 2016 – 2022</div>
              <div class="bullet">• Asesoría y apoyo preventa/posventa para tiendas online y portales inmobiliarios.</div>
              <div class="bullet">• Monitoreo y seguimiento de inmuebles en diversas plataformas sociales.</div>
              <br>

              <div class="item-title">Atención y Facturación</div>
              <div class="item-subtitle">Ferretotal C.A. | 2012 – 2014</div>
              <div class="bullet">• Recepción de mercancía, codificación y atención al cliente.</div>
              <div class="bullet">• Responsable de facturación, despacho y cuadre de caja diario.</div>
              <br>

              <div class="section-title">Formación Académica</div>
              <div class="item-title">Licenciatura en Contaduría Pública</div>
              <div class="item-subtitle">Universidad Central de Venezuela | Marzo 2025 – Actualidad</div>
              <br>
              <div class="item-title">Contador Técnico Medio</div>
              <div class="item-subtitle">Centro de Contadores | 2024 – 2025</div>
              <br>
              <div class="item-title">Licenciatura en Ciencias Estadísticas</div>
              <div class="item-subtitle">Universidad Central de Venezuela | 2015 – 2019 (No continuado)</div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%; vertical-align: top; padding-right: 10pt;">
              <div class="section-title">Idiomas</div>
              <div class="item-title">Italiano</div>
              <div class="item-subtitle">Avanzado (FUNDEIM-UCV)</div>
              <br>
              <div class="item-title">Inglés</div>
              <div class="item-subtitle">Intermedio (Fyr Lois Institute)</div>
            </td>
            <td style="width: 50%; vertical-align: top; padding-left: 10pt;">
              <div class="section-title">Programas</div>
              <div class="bullet">• Suite Ofimática: nivel medio - alto</div>
              <div class="bullet">• Galac administrativo y contable: nivel medio</div>
              <div class="bullet">• Stellar: nivel medio</div>
            </td>
          </tr>
        </table>
        
        <div class="footer">
          © 2026 Jesus Alejandro Sivira Rodríguez • Caracas, Venezuela
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
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Jesus Sivira"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <motion.h1 variants={item} className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Jesus Alejandro Sivira Rodríguez
              </motion.h1>
              <motion.div variants={item} className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-300 text-sm">
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
          </div>
          
          <button 
            onClick={handlePrint}
            className="absolute top-8 right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors print:hidden"
            title="Imprimir CV"
          >
            <Download className="w-5 h-5" />
          </button>
        </header>

        <div className="p-8 sm:p-12 space-y-12">
          {/* Profile Section */}
          <motion.section variants={item} className="resume-section">
            <h2 className="section-title"><User className="w-4 h-4" /> Perfil Profesional</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Estudiante de Contaduría Pública con sólida experiencia técnica en gestión fiscal y contable. 
              Capacidad demostrada en conciliaciones bancarias, declaraciones de impuestos y cumplimiento de libros legales, 
              con un enfoque en la eficiencia de procesos y prevención de riesgos fiscales.
            </p>
          </motion.section>

          {/* Experience Section */}
          <motion.section variants={item} className="resume-section">
            <h2 className="section-title"><Briefcase className="w-4 h-4" /> Experiencia Laboral</h2>
            <div className="space-y-8">
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

          {/* Education Section */}
          <motion.section variants={item} className="resume-section">
            <h2 className="section-title"><GraduationCap className="w-4 h-4" /> Formación Académica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EducationItem 
                degree="Licenciatura en Contaduría Pública"
                institution="Universidad Central de Venezuela"
                period="Marzo 2025 – Actualidad"
              />
              <EducationItem 
                degree="Contador Técnico Medio"
                institution="Centro de Contadores"
                period="2024 – 2025"
              />
              <EducationItem 
                degree="Licenciatura en Ciencias Estadísticas"
                institution="Universidad Central de Venezuela"
                period="2015 – 2019 (No continuado)"
              />
            </div>
          </motion.section>

          {/* Bottom Grid: Languages & Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <motion.section variants={item} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h2 className="section-title mb-6"><Languages className="w-4 h-4" /> Idiomas</h2>
              <div className="space-y-4">
                <LanguageItem name="Italiano" level="Avanzado" percent="90%" sub="FUNDEIM-UCV" />
                <LanguageItem name="Inglés" level="Intermedio" percent="65%" sub="Fyr Lois Institute" />
              </div>
            </motion.section>

            <motion.section variants={item} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h2 className="section-title mb-6"><CheckCircle2 className="w-4 h-4" /> Programas</h2>
              <div className="space-y-4">
                <ProgramItem name="Suite Ofimática" level="Nivel medio - alto" />
                <ProgramItem name="Galac administrativo y contable" level="Nivel medio" />
                <ProgramItem name="Stellar" level="Nivel medio" />
              </div>
            </motion.section>
          </div>
        </div>

        <footer className="bg-slate-50 border-t border-slate-100 p-8 text-center text-slate-400 text-xs">
          <p>© 2026 Jesus Alejandro Sivira Rodríguez • Caracas, Venezuela</p>
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

function ProgramItem({ name, level }: { name: string, level: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-slate-500">{level}</span>
      </div>
      <div className="w-full bg-slate-100 h-1.5 rounded-full">
        <div 
          className="bg-indigo-600 h-1.5 rounded-full" 
          style={{ width: level.includes('alto') ? '85%' : '50%' }} 
        />
      </div>
    </div>
  );
}

function LanguageItem({ name, level, percent, sub }: { 
  name: string, 
  level: string, 
  percent: string,
  sub: string
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-slate-500">{level}</span>
      </div>
      <div className="w-full bg-slate-100 h-1.5 rounded-full">
        <div className="bg-slate-900 h-1.5 rounded-full" style={{ width: percent }} />
      </div>
      <p className="text-[10px] text-slate-400 mt-1">{sub}</p>
    </div>
  );
}
