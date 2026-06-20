export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';

export const landingContent = {
  es: {
    nav: {
      links: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Soluciones', href: '#soluciones' },
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Beneficios', href: '#beneficios' },
        { label: 'Contacto', href: '#contacto' },
      ],
      cta: 'Solicitar demo',
    },
    hero: {
      badge: 'Salud digital conectada',
      title: 'Atención médica conectada, rápida y segura',
      subtitle: 'Hampiq conecta pacientes, familiares, profesionales de salud e instituciones en un ecosistema médico inteligente.',
      primaryCta: 'Solicitar demo',
      secondaryCta: 'Ver cómo funciona',
      mockup: {
        status: 'Activo',
        eyebrow: 'Hampiq Monitor',
        title: 'Panel en tiempo real',
        emergencyLabel: 'Emergencias',
        emergencyValue: '2 alertas en curso',
        consultationLabel: 'Teleconsulta',
        consultationValue: 'Especialista conectado',
        historyLabel: 'Historial',
        historyValue: 'Última nota añadida',
        teamLabel: 'Equipo médico',
        teamValue: '5 profesionales activos',
        operationsLabel: 'Operaciones',
        operationsValue: '3 sedes sincronizadas',
      },
      stats: [
        { title: 'Alerta de emergencia', description: 'Botón SOS para respuesta prioritaria.' },
        { title: 'Telemedicina', description: 'Consultas digitales con especialistas.' },
        { title: 'Familiares', description: 'Acompañamiento autorizado y notificaciones.' },
        { title: 'Historial clínico', description: 'Toda la información en un solo lugar.' },
      ],
    },
    missionVision: {
      missionTitle: 'Misión',
      mission:
        'Transformar el acceso a la salud mediante tecnología, coordinación y atención oportuna, conectando personas y profesionales en un ecosistema médico inteligente.',
      visionTitle: 'Visión',
      vision:
        'Convertirnos en la plataforma líder de salud digital en Latinoamérica, impulsando una atención más accesible, humana y conectada.',
      tagline: 'Salud más cercana, humana y conectada.',
    },
    emergencySystem: {
      title: 'Respuesta rápida cuando más importa',
      subtitle:
        'Hampiq clasifica la prioridad de atención mediante un sistema de semáforo para coordinar respuestas oportunas.',
      sideNote:
        'Cada alerta puede ser enviada al equipo correspondiente según prioridad, ubicación y disponibilidad.',
      levels: [
        {
          title: 'Emergencia crítica',
          color: 'red',
          examples: ['Pérdida de conciencia', 'Convulsiones', 'Dolor torácico severo'],
        },
        {
          title: 'Atención prioritaria',
          color: 'yellow',
          examples: ['Fiebre alta', 'Dolor persistente', 'Lesiones moderadas'],
        },
        {
          title: 'Seguimiento o consulta',
          color: 'green',
          examples: ['Dudas médicas', 'Control de síntomas', 'Consultas generales'],
        },
      ],
    },
    familyCare: {
      title: 'Porque la salud también se cuida en familia',
      subtitle:
        'Hampiq permite que familiares autorizados acompañen el estado de salud del paciente, reciban actualizaciones y participen en momentos importantes.',
      items: [
        'Vinculación de familiar o cuidador',
        'Notificaciones ante emergencias',
        'Seguimiento de atenciones',
        'Acceso controlado a información relevante',
        'Acompañamiento en consultas y evolución',
      ],
      mockup: {
        patient: 'Paciente',
        relative: 'Familiar autorizado',
        status: 'En seguimiento',
        lastCare: 'Última atención registrada',
        notify: 'Notificar familiar',
      },
    },
    pillars: {
      title: 'Los pilares de Hampiq',
      subtitle: 'Una plataforma pensada para responder, conectar y acompañar.',
      items: [
        { title: 'Atención rápida', description: 'Conectar pacientes con ayuda cuando la necesitan.' },
        { title: 'Coordinación médica', description: 'Unir profesionales, pacientes e instituciones.' },
        { title: 'Tecnología inteligente', description: 'Automatización y apoyo digital.' },
        { title: 'Seguridad', description: 'Protección de información médica.' },
        { title: 'Escalabilidad', description: 'Diseñado para crecer con nuevas necesidades.' },
        { title: 'Accesibilidad', description: 'Atención disponible desde cualquier lugar.' },
      ],
    },
    problem: {
      title: 'El acceso a la salud sigue siendo lento, disperso y poco coordinado',
      subtitle:
        'Pacientes, médicos e instituciones suelen operar con información separada, tiempos largos y procesos poco conectados.',
      items: [
        'Atención fragmentada',
        'Respuesta lenta ante emergencias',
        'Dificultad para conectar con especialistas',
        'Falta de historial centralizado',
      ],
    },
    solution: {
      title: 'Un ecosistema conectado para cada etapa de la atención',
      cards: [
        { title: 'Emergencias', description: 'Botón de auxilio y clasificación por prioridad.' },
        { title: 'Orientación inicial', description: 'Guía temprana para el paciente y derivaciones inteligentes.' },
        { title: 'Telemedicina', description: 'Consultas digitales con especialistas desde cualquier lugar.' },
        { title: 'Historial clínico', description: 'Registro centralizado de atenciones y notas médicas.' },
        { title: 'Gestión de profesionales', description: 'Herramientas para equipos y equipos clínicos.' },
        { title: 'Coordinación de atención', description: 'Flujos integrados entre pacientes, médicos e instituciones.' },
      ],
    },
    howItWorks: {
      title: 'Cómo funciona Hampiq',
      steps: [
        { title: 'Solicitud de ayuda', description: 'El paciente inicia una consulta o activa una alerta desde la app.' },
        { title: 'Clasificación por prioridad', description: 'Hampiq ordena la necesidad según urgencia, contexto y disponibilidad.' },
        { title: 'Conexión con el equipo adecuado', description: 'La plataforma coordina profesionales, familiares o servicios vinculados.' },
        { title: 'Atención y seguimiento', description: 'Cada interacción queda registrada para continuidad y trazabilidad.' },
      ],
    },
    modules: {
      title: 'Módulos principales',
      cards: [
        {
          title: 'Emergencias',
          description: 'Respuesta rápida mediante botón de auxilio y clasificación por prioridad.',
        },
        {
          title: 'Telemedicina',
          description: 'Conexión con especialistas mediante consultas digitales.',
        },
        {
          title: 'Historial clínico',
          description: 'Registro centralizado de atenciones, síntomas y notas médicas.',
        },
        {
          title: 'Panel profesional',
          description: 'Herramientas para médicos, enfermeros y especialistas.',
        },
        {
          title: 'Gestión operativa',
          description: 'Administración de usuarios, sedes, profesionales y atención.',
        },
        {
          title: 'App para pacientes',
          description: 'Acceso simple a ayuda, consultas e información médica.',
        },
        {
          title: 'Familiares y cuidadores',
          description: 'Acompañamiento autorizado, alertas y seguimiento familiar.',
        },
      ],
    },
    benefits: {
      title: 'Beneficios para cada usuario',
      groups: [
        {
          title: 'Pacientes',
          items: ['Acceso rápido', 'Atención guiada', 'Historial centralizado', 'Menos incertidumbre'],
        },
        {
          title: 'Familiares',
          items: ['Seguimiento autorizado', 'Notificaciones importantes', 'Mayor tranquilidad', 'Acompañamiento informado'],
        },
        {
          title: 'Profesionales',
          items: ['Gestión de consultas', 'Información clínica disponible', 'Mejor coordinación', 'Seguimiento más eficiente'],
        },
        {
          title: 'Instituciones',
          items: ['Mejor coordinación', 'Supervisión operativa', 'Datos centralizados', 'Escalabilidad por módulos'],
        },
      ],
    },
    differentiators: {
      title: 'Hampiq no es solo otra app médica',
      items: [
        'No es solo telemedicina.',
        'No depende exclusivamente de inteligencia artificial.',
        'Integra emergencia, orientación y atención profesional.',
        'Puede adaptarse a clínicas, universidades, empresas o instituciones.',
        'Está pensada para crecer por módulos.',
      ],
    },
    trust: {
      title: 'Diseñado para operar con confianza',
      cards: [
        'Seguridad de datos',
        'Roles y permisos',
        'Verificación de profesionales',
        'Historial clínico protegido',
        'Trazabilidad de atenciones',
        'Auditoría de acciones',
      ],
    },
    technology: {
      title: 'Tecnología que impulsa Hampiq',
      subtitle: 'Integramos herramientas modernas para construir una plataforma segura, escalable e inteligente.',
      items: [
        { logo: 'G', name: 'Google Cloud', description: 'Infraestructura escalable.' },
        { logo: 'AI', name: 'OpenAI', description: 'Asistente conversacional y orientación inicial.' },
        { logo: 'F', name: 'Firebase', description: 'Servicios móviles y notificaciones.' },
        { logo: 'S', name: 'Supabase', description: 'Backend y datos en tiempo real.' },
        { logo: 'PG', name: 'PostgreSQL', description: 'Base de datos robusta.' },
        { logo: 'D', name: 'Docker', description: 'Despliegue portable y consistente.' },
      ],
    },
    partners: {
      title: 'Potenciado por líderes tecnológicos',
      subtitle:
        'Hampiq integra tecnologías modernas para ofrecer una experiencia segura, escalable y confiable.',
      items: ['Google', 'OpenAI', 'Firebase', 'Docker'],
    },
    team: {
      title: 'Las personas detrás de Hampiq',
      subtitle:
        'Hampiq es construido por un equipo multidisciplinario comprometido con transformar la salud mediante tecnología.',
      members: [
        { name: 'Integrante 01', role: 'CTO & Lead Software Engineer', description: 'Arquitectura técnica y dirección de producto.' },
        { name: 'Integrante 02', role: 'Full Stack Developer', description: 'Experiencias web, APIs y flujos operativos.' },
        { name: 'Integrante 03', role: 'Mobile Developer', description: 'Aplicaciones móviles para pacientes y profesionales.' },
        { name: 'Integrante 04', role: 'UI/UX Designer', description: 'Diseño de experiencia, accesibilidad e interfaz.' },
        { name: 'Integrante 05', role: 'AI Engineer', description: 'Automatización, clasificación y asistencia inteligente.' },
        { name: 'Integrante 06', role: 'Product Manager', description: 'Estrategia, validación y coordinación del roadmap.' },
      ],
    },
    impact: {
      title: 'Impacto esperado',
      note: 'Indicadores proyectados para escenarios de implementación institucional.',
      metrics: [
        { value: '50%', label: 'Menor tiempo de respuesta.' },
        { value: '24/7', label: 'Disponibilidad digital.' },
        { value: '1 Plataforma', label: 'Todo el ecosistema conectado.' },
        { value: '100%', label: 'Trazabilidad de atención.' },
      ],
    },
    finalCta: {
      title: 'Construyamos una atención médica más conectada',
      subtitle: 'Hampiq nace para acercar atención, tecnología y personas en los momentos donde la salud no puede esperar.',
      primaryCta: 'Solicitar demo',
      secondaryCta: 'Contactar al equipo',
    },
    footer: {
      description: 'Hampiq conecta personas, profesionales y servicios médicos en una plataforma de salud digital moderna.',
      links: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Soluciones', href: '#soluciones' },
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Beneficios', href: '#beneficios' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
  },
  en: {
    nav: {
      links: [
        { label: 'Home', href: '#inicio' },
        { label: 'Solutions', href: '#soluciones' },
        { label: 'How it works', href: '#como-funciona' },
        { label: 'Benefits', href: '#beneficios' },
        { label: 'Contact', href: '#contacto' },
      ],
      cta: 'Request demo',
    },
    hero: {
      badge: 'Connected digital health',
      title: 'Connected, fast and secure healthcare',
      subtitle: 'Hampiq connects patients, families, healthcare professionals and institutions in an intelligent medical ecosystem.',
      primaryCta: 'Request demo',
      secondaryCta: 'See how it works',
      mockup: {
        status: 'Active',
        eyebrow: 'Hampiq Monitor',
        title: 'Real-time panel',
        emergencyLabel: 'Emergencies',
        emergencyValue: '2 active alerts',
        consultationLabel: 'Teleconsultation',
        consultationValue: 'Specialist connected',
        historyLabel: 'History',
        historyValue: 'Latest note added',
        teamLabel: 'Medical team',
        teamValue: '5 active professionals',
        operationsLabel: 'Operations',
        operationsValue: '3 sites synchronized',
      },
      stats: [
        { title: 'Emergency alert', description: 'SOS button for prioritized response.' },
        { title: 'Telemedicine', description: 'Digital consultations with specialists.' },
        { title: 'Family members', description: 'Authorized support and notifications.' },
        { title: 'Clinical history', description: 'All care information in one place.' },
      ],
    },
    missionVision: {
      missionTitle: 'Mission',
      mission:
        'Transform access to healthcare through technology, coordination and timely care, connecting people and professionals in an intelligent medical ecosystem.',
      visionTitle: 'Vision',
      vision:
        'Become the leading digital health platform in Latin America, powering more accessible, human and connected care.',
      tagline: 'Closer, more human and connected healthcare.',
    },
    emergencySystem: {
      title: 'Fast response when it matters most',
      subtitle:
        'Hampiq classifies care priority through a semaphore system to coordinate timely responses.',
      sideNote:
        'Each alert can be sent to the right team based on priority, location and availability.',
      levels: [
        {
          title: 'Critical emergency',
          color: 'red',
          examples: ['Loss of consciousness', 'Seizures', 'Severe chest pain'],
        },
        {
          title: 'Priority care',
          color: 'yellow',
          examples: ['High fever', 'Persistent pain', 'Moderate injuries'],
        },
        {
          title: 'Follow-up or consultation',
          color: 'green',
          examples: ['Medical questions', 'Symptom monitoring', 'General consultations'],
        },
      ],
    },
    familyCare: {
      title: 'Because health is also cared for as a family',
      subtitle:
        'Hampiq allows authorized family members to follow the patient health status, receive updates and participate in important moments.',
      items: [
        'Family member or caregiver linking',
        'Emergency notifications',
        'Care follow-up',
        'Controlled access to relevant information',
        'Support during consultations and progress',
      ],
      mockup: {
        patient: 'Patient',
        relative: 'Authorized family member',
        status: 'In follow-up',
        lastCare: 'Latest care recorded',
        notify: 'Notify family member',
      },
    },
    pillars: {
      title: 'Hampiq pillars',
      subtitle: 'A platform designed to respond, connect and support.',
      items: [
        { title: 'Fast care', description: 'Connect patients with help when they need it.' },
        { title: 'Medical coordination', description: 'Unite professionals, patients and institutions.' },
        { title: 'Intelligent technology', description: 'Automation and digital support.' },
        { title: 'Security', description: 'Protection for medical information.' },
        { title: 'Scalability', description: 'Designed to grow with new needs.' },
        { title: 'Accessibility', description: 'Care available from anywhere.' },
      ],
    },
    problem: {
      title: 'Access to healthcare is still slow, fragmented and poorly coordinated',
      subtitle:
        'Patients, doctors and institutions often operate with separated information, long waiting times and disconnected processes.',
      items: [
        'Fragmented care',
        'Slow emergency response',
        'Difficulty connecting with specialists',
        'Lack of centralized history',
      ],
    },
    solution: {
      title: 'A connected ecosystem for every stage of care',
      cards: [
        { title: 'Emergencies', description: 'Assistance button and priority classification.' },
        { title: 'Initial guidance', description: 'Early support for patients and intelligent referrals.' },
        { title: 'Telemedicine', description: 'Digital consultations with specialists from anywhere.' },
        { title: 'Clinical history', description: 'Centralized record of care and medical notes.' },
        { title: 'Professional management', description: 'Tools for care teams and clinical staff.' },
        { title: 'Care coordination', description: 'Integrated workflows across patients, providers and institutions.' },
      ],
    },
    howItWorks: {
      title: 'How Hampiq works',
      steps: [
        { title: 'Help request', description: 'The patient starts a consultation or activates an alert from the app.' },
        { title: 'Priority classification', description: 'Hampiq orders the need by urgency, context and availability.' },
        { title: 'Connection with the right team', description: 'The platform coordinates professionals, family members or linked services.' },
        { title: 'Care and follow-up', description: 'Each interaction is recorded for continuity and traceability.' },
      ],
    },
    modules: {
      title: 'Core product modules',
      cards: [
        {
          title: 'Emergencies',
          description: 'Fast response through an assistance button and priority classification.',
        },
        {
          title: 'Telemedicine',
          description: 'Connection with specialists through digital consultations.',
        },
        {
          title: 'Clinical history',
          description: 'Centralized record of care, symptoms and medical notes.',
        },
        {
          title: 'Professional panel',
          description: 'Tools for doctors, nurses and specialists.',
        },
        {
          title: 'Operational management',
          description: 'Administration of users, locations, professionals and care operations.',
        },
        {
          title: 'Patient app',
          description: 'Simple access to help, consultations and medical information.',
        },
        {
          title: 'Family and caregivers',
          description: 'Authorized support, alerts and family follow-up.',
        },
      ],
    },
    benefits: {
      title: 'Benefits for each audience',
      groups: [
        {
          title: 'Patients',
          items: ['Fast access', 'Guided assistance', 'Centralized history', 'Less uncertainty'],
        },
        {
          title: 'Family members',
          items: ['Authorized follow-up', 'Important notifications', 'More peace of mind', 'Informed support'],
        },
        {
          title: 'Professionals',
          items: ['Consultation management', 'Available clinical information', 'Better coordination', 'More efficient follow-up'],
        },
        {
          title: 'Institutions',
          items: ['Better coordination', 'Operational supervision', 'Centralized data', 'Modular scalability'],
        },
      ],
    },
    differentiators: {
      title: 'Hampiq is not just another healthcare app',
      items: [
        'It is not just telemedicine.',
        'It does not rely exclusively on artificial intelligence.',
        'It integrates emergencies, guidance and professional care.',
        'It can adapt to clinics, universities, companies or institutions.',
        'It is designed to scale through modules.',
      ],
    },
    trust: {
      title: 'Built to operate with trust',
      cards: [
        'Data security',
        'Roles and permissions',
        'Professional verification',
        'Protected clinical history',
        'Care traceability',
        'Action auditing',
      ],
    },
    technology: {
      title: 'Technology powering Hampiq',
      subtitle: 'We integrate modern tools to build a secure, scalable and intelligent platform.',
      items: [
        { logo: 'G', name: 'Google Cloud', description: 'Scalable infrastructure.' },
        { logo: 'AI', name: 'OpenAI', description: 'Conversational assistant and initial guidance.' },
        { logo: 'F', name: 'Firebase', description: 'Mobile services and notifications.' },
        { logo: 'S', name: 'Supabase', description: 'Backend and real-time data.' },
        { logo: 'PG', name: 'PostgreSQL', description: 'Robust database.' },
        { logo: 'D', name: 'Docker', description: 'Portable and consistent deployment.' },
      ],
    },
    partners: {
      title: 'Powered by technology leaders',
      subtitle:
        'Hampiq integrates modern technologies to deliver a secure, scalable and reliable experience.',
      items: ['Google', 'OpenAI', 'Firebase', 'Docker'],
    },
    team: {
      title: 'The people behind Hampiq',
      subtitle:
        'Hampiq is built by a multidisciplinary team committed to transforming healthcare through technology.',
      members: [
        { name: 'Member 01', role: 'CTO & Lead Software Engineer', description: 'Technical architecture and product direction.' },
        { name: 'Member 02', role: 'Full Stack Developer', description: 'Web experiences, APIs and operational flows.' },
        { name: 'Member 03', role: 'Mobile Developer', description: 'Mobile apps for patients and professionals.' },
        { name: 'Member 04', role: 'UI/UX Designer', description: 'Experience design, accessibility and interface.' },
        { name: 'Member 05', role: 'AI Engineer', description: 'Automation, classification and intelligent assistance.' },
        { name: 'Member 06', role: 'Product Manager', description: 'Strategy, validation and roadmap coordination.' },
      ],
    },
    impact: {
      title: 'Expected impact',
      note: 'Projected indicators for institutional implementation scenarios.',
      metrics: [
        { value: '50%', label: 'Lower response time.' },
        { value: '24/7', label: 'Digital availability.' },
        { value: '1 Platform', label: 'The whole ecosystem connected.' },
        { value: '100%', label: 'Care traceability.' },
      ],
    },
    finalCta: {
      title: 'Let’s build more connected healthcare',
      subtitle: 'Hampiq was born to bring care, technology and people closer in the moments when health cannot wait.',
      primaryCta: 'Request demo',
      secondaryCta: 'Contact the team',
    },
    footer: {
      description: 'Hampiq connects people, professionals and medical services in a modern digital health platform.',
      links: [
        { label: 'Home', href: '#inicio' },
        { label: 'Solutions', href: '#soluciones' },
        { label: 'How it works', href: '#como-funciona' },
        { label: 'Benefits', href: '#beneficios' },
        { label: 'Contact', href: '#contacto' },
      ],
    },
  },
};
