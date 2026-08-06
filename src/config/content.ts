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
      cta: 'Abrir Jampic',
    },
    hero: {
      title: 'Atención médica conectada, rápida y segura',
      subtitle: 'Jampic conecta pacientes, familiares, profesionales de salud e instituciones en un ecosistema médico inteligente.',
      primaryCta: 'Usar versión web',
      secondaryCta: 'Descargar para Android',
      dashboardAlt: 'Panel médico en tiempo real de Jampic',
      mobileAlt: 'Aplicación móvil de Jampic',
      features: [
        {
          title: 'Respuestas inmediatas',
          description: 'Cuando más importa',
        },
        {
          title: 'Información segura',
          description: 'Privacidad garantizada',
        },
        {
          title: 'Todos conectados',
          description: 'Un ecosistema único',
        },
        {
          title: 'Datos en tiempo real',
          description: 'Decisiones más rápidas',
        },
      ],
    },
    missionVision: {
      missionTitle: 'Misión',
      subtitleMission: 'Nuestra esencia',
      mission: 'Transformar el acceso a la salud mediante tecnología, coordinación y atención oportuna, conectando personas y profesionales en un ecosistema médico inteligente.',
      visionTitle: 'Visión',
      subtitleVision: 'Hacia dónde vamos',
      vision: 'Convertirnos en la plataforma líder de salud digital en Latinoamérica, impulsando una atención más accesible, humana y conectada.',
      tagline: 'Salud más cercana, humana y conectada.',
    },
    emergencySystem: {
      title: 'Respuesta rápida cuando más importa',
      subtitle: 'Jampic clasifica la prioridad de atención mediante un sistema de semáforo para coordinar respuestas oportunas.',
      sideTitle: 'Coordinación inteligente',
      sideNote: 'Cada alerta puede ser enviada al equipo correspondiente según prioridad, ubicación y disponibilidad.',
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
      subtitle: 'Jampic permite que familiares autorizados acompañen el estado de salud del paciente, reciban actualizaciones y participen en momentos importantes.',
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
        telemedicine: 'Teleconsulta completada',
        notify: 'Notificar familiar',
        notifyed: 'Familiar notificado',
      },
    },
    pillars: {
      title: 'Los pilares de Jampic',
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
      subtitle: 'Pacientes, médicos e instituciones suelen operar con información separada, tiempos largos y procesos poco conectados.',
      items: [
        'Atención fragmentada',
        'Respuesta lenta ante emergencias',
        'Dificultad para conectar con especialistas',
        'Falta de historial centralizado',
      ],
      patient: 'Paciente',
      needCare: 'Necesita atención',
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
      ecosystem: 'Ecosistema',
    },
    howItWorks: {
      title: 'Cómo funciona Jampic',
      steps: [
        { title: 'Solicitud de ayuda', description: 'El paciente inicia una consulta o activa una alerta desde la app.' },
        { title: 'Clasificación por prioridad', description: 'Jampic ordena la necesidad según urgencia, contexto y disponibilidad.' },
        { title: 'Conexión con el equipo adecuado', description: 'La plataforma coordina profesionales, familiares o servicios vinculados.' },
        { title: 'Atención y seguimiento', description: 'Cada interacción queda registrada para continuidad y trazabilidad.' },
      ],
    },
    modules: {
      title: 'Módulos principales',
      labels: {
        prioritySystem: 'Sistema prioritario',
        digitalVisit: 'Consulta digital',
        clinicalProgress: 'Evolución clínica',
        support: 'Acompañamiento',
        careTeam: 'Equipo clínico',
        institutionalOps: 'Operación institucional',
        activeLocation: 'Ubicación activa',
        activeResponse: 'Respuesta activa',
        doctorConnected: 'Médico conectado',
        notificationSent: 'Notificación enviada',
        users: 'Usuarios',
        sites: 'Sedes',
        historyItems: ['Atenciones registradas', 'Síntomas reportados', 'Notas médicas consolidadas'],
        professionalItems: ['Agenda médica', 'Notas clínicas', 'Disponibilidad del equipo'],
        patientAppMetric: 'Acceso directo para emergencias, consultas e historial.',
        telemedicineItems: [
          'Consulta remota segura',
          'Especialistas disponibles',
          'Seguimiento posterior',
        ],
        emergencyFeatures: [
          {
            title: 'Ubicación en tiempo real',
            description: 'Permite identificar el lugar exacto de la emergencia.',
          },
          {
            title: 'Clasificación por prioridad',
            description: 'Alerta clasificada para una respuesta más eficiente.',
          },
          {
            title: 'Respuesta inmediata',
            description: 'Notificación automática al equipo de atención.',
          },
        ],
        telemedicineFeatures: [
          {
            title: 'Videoconsulta segura',
            description: 'Comunicación en tiempo real con especialistas.',
          },
          {
            title: 'Historial integrado',
            description: 'Acceso al historial clínico durante la consulta.',
          },
          {
            title: 'Agendamiento fácil',
            description: 'Reserva de consultas según disponibilidad.',
          },
        ],
        doctorConnectedDescription: 'Especialista disponible para ti.',
        familyItems: [
          {
            title: 'Acceso autorizado',
            description: 'Familiares con permisos definidos.',
          },
          {
            title: 'Alertas inteligentes',
            description: 'Notificaciones ante eventos importantes.',
          },
          {
            title: 'Seguimiento familiar',
            description: 'Información actualizada del paciente.',
          },
        ],
        userMetricDescription: 'Gestión de cuentas y permisos.',
        siteMetricDescription: 'Centros de atención activos.',
      },
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
      title: 'Jampic no es solo otra app médica',
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
      pillars: ['Acceso', 'Permisos', 'Historial'],
    },
    technology: {
      title: 'Tecnología que impulsa Jampic',
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
      subtitle: 'Jampic integra tecnologías modernas para ofrecer una experiencia segura, escalable y confiable.',
      items: ['Google', 'OpenAI', 'Firebase', 'Docker'],
    },
    team: {
      title: 'Las personas detrás de Jampic',
      subtitle: 'Jampic es construido por un equipo multidisciplinario comprometido con transformar la salud mediante tecnología.',
      members: [
        {
          name: 'Brayan Mejía',
          image: '/team/brayan-mejia.png',
          role: 'CEO e Ingeniero Biomédico',
          description: 'Lidera la visión de la empresa, la estrategia de innovación en salud y el desarrollo de soluciones orientadas a necesidades médicas reales.',
        },
        {
          name: 'Laura Nuñez',
          image: '/team/laura-nunez.png',
          role: 'CTO & Lead Software Engineer',
          description: 'Dirige la arquitectura de software, la ingeniería de la plataforma, las APIs y la ejecución técnica de todo el ecosistema.',
        },
        {
          name: 'Mishel Bravo',
          image: '/team/mishel-bravo.png',
          role: 'Chief AI Officer (CAIO)',
          description: 'Impulsa la estrategia de inteligencia artificial, los sistemas de apoyo a la toma de decisiones clínicas y la evolución de los servicios inteligentes.',
        },
        {
          name: 'Luis Ferreyra',
          image: '/team/luis-ferreyra.png',
          role: 'Co-Fundador y CMO',
          description: 'Lidera el crecimiento, las alianzas estratégicas, el posicionamiento de marca y la expansión comercial de la plataforma.',
        },
        {
          name: 'Sergio Vásquez',
          image: '/team/sergio-vasquez.png',
          role: 'Especialista en Análisis de Costos',
          description: 'Desarrolla modelos de costos, estructuras de precios y análisis financieros para respaldar decisiones sostenibles basadas en datos.',
        },
        {
          name: 'Melissa Herrera',
          image: '/team/melissa-herrera.png',
          role: 'Coordinadora de Relaciones Médicas',
          description: 'Gestiona la relación con profesionales de la salud, apoya los procesos de validación médica y fortalece la colaboración clínica.',
        },
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
      projection: 'Proyección',
    },
    finalCta: {
      title: 'Construyamos una atención médica más conectada',
      subtitle: 'Jampic nace para acercar atención, tecnología y personas en los momentos donde la salud no puede esperar.',
      primaryCta: 'Usar versión web',
      secondaryCta: 'Descargar APK',
      care: 'Cuidado conectado',
    },
    footer: {
      copyright: '© 2026 Jampic. Todos los derechos reservados.',
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
      cta: 'Open Jampic',
    },
    hero: {
      title: 'Connected, fast and secure healthcare',
      subtitle: 'Jampic connects patients, families, healthcare professionals and institutions in an intelligent medical ecosystem.',
      primaryCta: 'Use web version',
      secondaryCta: 'Download for Android',
      dashboardAlt: 'Jampic real-time medical dashboard',
      mobileAlt: 'Jampic mobile application',
      features: [
        {
          title: 'Instant response',
          description: 'When it matters most',
        },
        {
          title: 'Secure information',
          description: 'Privacy guaranteed',
        },
        {
          title: 'Everyone connected',
          description: 'A unified ecosystem',
        },
        {
          title: 'Real-time data',
          description: 'Faster decisions',
        },
      ],
    },
    missionVision: {
      missionTitle: 'Mission',
      subtitleMission: 'Our essence',
      mission: 'Transform access to healthcare through technology, coordination and timely care, connecting people and professionals in an intelligent medical ecosystem.',
      visionTitle: 'Vision',
      subtitleVision: 'Where we are headed',
      vision: 'Become the leading digital health platform in Latin America, powering more accessible, human and connected care.',
      tagline: 'Closer, more human and connected healthcare.',
    },
    emergencySystem: {
      title: 'Fast response when it matters most',
      subtitle: 'Jampic classifies care priority through a semaphore system to coordinate timely responses.',
      sideTitle: 'Smart coordination',
      sideNote: 'Each alert can be sent to the right team based on priority, location and availability.',
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
      subtitle: 'Jampic allows authorized family members to follow the patient health status, receive updates and participate in important moments.',
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
        telemedicine: 'Telemedicine completed',
        notify: 'Notify family member',
        notifyed: 'Family member notified',
      },
    },
    pillars: {
      title: 'Jampic pillars',
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
      subtitle: 'Patients, doctors and institutions often operate with separated information, long waiting times and disconnected processes.',
      items: [
        'Fragmented care',
        'Slow emergency response',
        'Difficulty connecting with specialists',
        'Lack of centralized history',
      ],
      patient: 'Patient',
      needCare: 'Needs care',
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
      ecosystem: 'Ecosystem',
    },
    howItWorks: {
      title: 'How Jampic works',
      steps: [
        { title: 'Help request', description: 'The patient starts a consultation or activates an alert from the app.' },
        { title: 'Priority classification', description: 'Jampic orders the need by urgency, context and availability.' },
        { title: 'Connection with the right team', description: 'The platform coordinates professionals, family members or linked services.' },
        { title: 'Care and follow-up', description: 'Each interaction is recorded for continuity and traceability.' },
      ],
    },
    modules: {
      title: 'Core product modules',
      labels: {
        prioritySystem: 'Priority system',
        digitalVisit: 'Digital visit',
        clinicalProgress: 'Clinical progress',
        support: 'Support',
        careTeam: 'Care team',
        institutionalOps: 'Institutional ops',
        activeLocation: 'Live location',
        activeResponse: 'Active response',
        doctorConnected: 'Doctor connected',
        notificationSent: 'Notification sent',
        users: 'Users',
        sites: 'Sites',
        historyItems: ['Registered care events', 'Reported symptoms', 'Consolidated medical notes'],
        professionalItems: ['Medical schedule', 'Clinical notes', 'Team availability'],
        patientAppMetric: 'Direct access to emergencies, consultations and history.',
        telemedicineItems: ['Secure remote visit', 'Available specialists', 'Post-consultation follow-up'],
        emergencyFeatures: [
          {
            title: 'Real time location',
            description: 'It allows you to identify the exact location of the emergency.',
          },
          {
            title: 'Sorting by priority',
            description: 'Classified alert for a more efficient response.',
          },
          {
            title: 'Immediate Response',
            description: 'Automatic notification to the support team.',
          },
        ],
        telemedicineFeatures: [
          {
            title: 'Secure Video Consultation',
            description: 'Real-time communication with specialists.',
          },
          {
            title: 'Integrated Medical History',
            description: 'Access to medical records during the consultation.',
          },
          {
            title: 'Easy Scheduling',
            description: 'Book appointments based on availability.',
          },
        ],
        doctorConnectedDescription: 'Specialist available for you.',
        familyItems: [
          {
            title: 'Authorized access',
            description: 'Family members with defined permissions.',
          },
          {
            title: 'Smart alerts',
            description: 'Notifications for important events.',
          },
          {
            title: 'Family follow-up',
            description: 'Updated patient information.',
          },
        ],
        userMetricDescription: 'Account and permission management.',
        siteMetricDescription: 'Active care centers.',
      },
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
      title: 'Jampic is not just another healthcare app',
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
      pillars: ['Access', 'Permissions', 'History'],
    },
    technology: {
      title: 'Technology powering Jampic',
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
      subtitle: 'Jampic integrates modern technologies to deliver a secure, scalable and reliable experience.',
      items: ['Google', 'OpenAI', 'Firebase', 'Docker'],
    },
    team: {
      title: 'The people behind Jampic',
      subtitle: 'Jampic is built by a multidisciplinary team committed to transforming healthcare through technology.',
      members: [
        {
          name: 'Brayan Mejía',
          image: '/team/brayan-mejia.png',
          role: 'CEO & Biomedical Engineer',
          description: 'Leads the company vision, healthcare innovation strategy, and product development aligned with real-world medical needs.',
        },
        {
          name: 'Laura Nuñez',
          image: '/team/laura-nunez.png',
          role: 'CTO & Lead Software Engineer',
          description: 'Leads software architecture, platform engineering, APIs, and the technical execution of the ecosystem.',
        },
        {
          name: 'Mishel Bravo',
          image: '/team/mishel-bravo.png',
          role: 'Chief AI Officer (CAIO)',
          description: 'Drives artificial intelligence strategy, clinical decision-support systems, and the evolution of intelligent healthcare services.',
        },
        {
          name: 'Luis Ferreyra',
          image: '/team/luis-ferreyra.png',
          role: 'Co-Founder & CMO',
          description: 'Leads growth, partnerships, market positioning, and communication strategies to expand the platform reach.',
        },
        {
          name: 'Sergio Vásquez',
          image: '/team/sergio-vasquez.png',
          role: 'Cost Analysis Specialist',
          description: 'Develops cost models, pricing structures, and financial analysis frameworks to ensure sustainable and data-driven decisions.',
        },
        {
          name: 'Melissa Herrera',
          image: '/team/melissa-herrera.png',
          role: 'Medical Relations Coordinator',
          description: 'Coordinates relationships with healthcare professionals, supports medical validation, and facilitates clinical collaboration.',
        },
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
      projection: 'Projection',
    },
    finalCta: {
      title: 'Let’s build more connected healthcare',
      subtitle: 'Jampic was born to bring care, technology and people closer in the moments when health cannot wait.',
      primaryCta: 'Use web version',
      secondaryCta: 'Download APK',
      care: 'Care connected',
    },
    footer: {
      copyright: '© 2026 Jampic. All rights reserved',
    },
  },
};
