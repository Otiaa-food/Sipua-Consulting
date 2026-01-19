document.addEventListener('DOMContentLoaded', () => {
    // Init Language
    const savedLang = localStorage.getItem('selectedLang') || 'de';
    setLanguage(savedLang);

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Menu Toggle (Simplified)
    // Add logic here if mobile menu button is added back to HTML
});

const translations = {
    de: {
        nav_home: "Startseite",
        nav_services: "Leistungen",
        nav_expertise: "Expertise",
        nav_trust: "Vertrauen",
        nav_contact: "Kontakt",

        hero_title: "ERFOLGREICH IN AFRIKA.",
        hero_subtitle: "Ihr Partner für Geschäfte in Afrika",
        btn_consult: "Beratung anfragen",
        btn_discover: "Leistungen entdecken",

        about_label: "Über Sipua Consulting",
        about_head: "Brückenbauer. Experte. Partner.",
        about_text_1: "Profitieren Sie von langjährigen Erfahrungen, fundierten Marktkenntnissen und belastbaren Netzwerken in Afrika. SIPUA CONSULTING begleitet Unternehmen, Institutionen und Investoren erfolgreich beim Markteintritt und bei der Umsetzung tragfähiger Geschäftsmodelle.",
        about_quote: "\"Erfolgreiche Geschäfte in Afrika erfordern mehr als Kapital – sie brauchen Verständnis, Vertrauen und die richtigen Verbindungen.\"",

        serv_label: "Unsere Leistungen",
        serv_head: "Ganzheitliche Beratung",
        serv_1_t: "Business Development",
        serv_1_d: "Strategische Geschäftsentwicklung für Firmen und Investoren mit Fokus auf Afrika.",
        serv_2_t: "Vernetzung & Entscheider",
        serv_2_d: "Direkter Zugang zu Wirtschaftslenkern und Regierungsstellen auf allen Ebenen.",
        serv_3_t: "PPP-Projektmanagement",
        serv_3_d: "Professionelle Betreuung von Public-Private-Partnerships von der Konzeption bis zur Umsetzung.",
        serv_4_t: "Markteintrittsstrategien",
        serv_4_d: "Maßgeschneiderte Konzepte für nachhaltige Erfolge im afrikanischen Wirtschaftsraum.",
        serv_5_t: "Erneuerbare Energien",
        serv_5_d: "Spezialisierung auf Solarenergie, Off-Grid-Anlagen und nachhaltige Energieprojekte.",
        serv_6_t: "Kommunikation & Moderation",
        serv_6_d: "Erfahrener Moderator und Redner für internationale Anlässe und interkulturelle Vermittlung.",

        exp_label: "Fundierte Expertise",
        exp_title: "Struktur für Ihren Erfolg",
        exp_g1: "Strategie & Analyse",
        exp_1_1: "Entscheidungsprozesse unterstützen",
        exp_1_2: "Strategische Konzepte entwickeln",
        exp_1_3: "Marktanalysen & Machbarkeit",

        exp_g2: "Umsetzung & Business",
        exp_2_1: "Geschäftsmodelle & Konzepte",
        exp_2_2: "Umsetzbare Businesspläne",
        exp_2_3: "Wirtschaftliche Rahmenbedingungen",

        exp_g3: "Lokale Kompetenz",
        exp_3_1: "Gesetze & Standortfaktoren",
        exp_3_2: "Beziehungsaufbau vor Ort",
        exp_3_3: "Marktkenntnisse",

        exp_g4: "Kulturelle Brücken",
        exp_4_1: "Interkulturelle Kommunikation",
        exp_4_2: "Geschäftsethik & Werte",
        exp_4_3: "Beziehungsaufbau DACH-Afrika",

        trust_label: "Referenzen",
        trust_title: "Vertrauen durch Erfahrung",
        trust_1_t: "African Energy Forum",
        trust_1_d: "Langjährige Präsenz und Expertise im Energiesektor. Vortrag beim African Energy Forum.",
        trust_2_t: "Internationale Auftritte",
        trust_2_d: "Präsenz auf internationalen Kongressen und Fachveranstaltungen als Redner und Experte.",
        trust_3_t: "Beratungsprojekte",
        trust_3_d: "Erfolgreiche Unterstützung von Unternehmen und Investoren bei komplexen Projekten in West- und Zentralafrika.",

        cont_label: "Kontakt",
        cont_title: "Sprechen wir über Ihr Afrika-Projekt.",
        form_name: "Name",
        form_mail: "E-Mail",
        form_msg: "Nachricht",
        form_send: "Nachricht senden",

        foot_nav: "Navigation",
        foot_legal: "Rechtliches",
        foot_imp: "Impressum",
        foot_priv: "Datenschutz"
    },
    fr: {
        nav_home: "Accueil",
        nav_services: "Services",
        nav_expertise: "Expertise",
        nav_trust: "Confiance",
        nav_contact: "Contact",

        hero_title: "RÉUSSIR EN AFRIQUE.",
        hero_subtitle: "Votre partenaire pour les affaires en Afrique",
        btn_consult: "Demander conseil",
        btn_discover: "Découvrir les services",

        about_label: "À propos de Sipua Consulting",
        about_head: "Bâtisseur de ponts. Expert. Partenaire.",
        about_text_1: "Profitez de nombreuses années d'expérience, de connaissances approfondies du marché et de réseaux solides en Afrique. SIPUA CONSULTING accompagne avec succès les entreprises, les institutions et les investisseurs.",
        about_quote: "\"Les affaires réussies en Afrique exigent plus que du capital – elles nécessitent de la compréhension, de la confiance et les bonnes relations.\"",

        serv_label: "Nos Services",
        serv_head: "Conseil Holistique",
        serv_1_t: "Développement Commercial",
        serv_1_d: "Développement commercial stratégique pour les entreprises et les investisseurs axés sur l'Afrique.",
        serv_2_t: "Réseautage & Décideurs",
        serv_2_d: "Accès direct aux dirigeants économiques et aux agences gouvernementales à tous les niveaux.",
        serv_3_t: "Gestion de Projets PPP",
        serv_3_d: "Accompagnement professionnel des partenariats public-privé, de la conception à la mise en œuvre.",
        serv_4_t: "Stratégies d'Entrée",
        serv_4_d: "Concepts sur mesure pour un succès durable dans la zone économique africaine.",
        serv_5_t: "Énergies Renouvelables",
        serv_5_d: "Spécialisation dans l'énergie solaire, les systèmes hors réseau et les projets d'énergie durable.",
        serv_6_t: "Communication & Modération",
        serv_6_d: "Modérateur et conférencier expérimenté pour les événements internationaux et la médiation interculturelle.",

        exp_label: "Expertise Approfondie",
        exp_title: "Structure pour votre succès",
        exp_g1: "Stratégie & Analyse",
        exp_1_1: "Soutenir les processus décisionnels",
        exp_1_2: "Développer des concepts stratégiques",
        exp_1_3: "Analyses de marché & faisabilité",

        exp_g2: "Mise en œuvre & Business",
        exp_2_1: "Modèles d'affaires & concepts",
        exp_2_2: "Plans d'affaires réalisables",
        exp_2_3: "Conditions cadres économiques",

        exp_g3: "Compétence Locale",
        exp_3_1: "Lois & facteurs de localisation",
        exp_3_2: "Établissement de relations sur place",
        exp_3_3: "Connaissance du marché",

        exp_g4: "Ponts Culturels",
        exp_4_1: "Communication interculturelle",
        exp_4_2: "Éthique des affaires & valeurs",
        exp_4_3: "Établissement de relations DACH-Afrique",

        trust_label: "Références",
        trust_title: "La confiance par l'expérience",
        trust_1_t: "African Energy Forum",
        trust_1_d: "Présence et expertise de longue date dans le secteur de l'énergie. Conférence au Forum Africain de l'Énergie.",
        trust_2_t: "Apparitions Internationales",
        trust_2_d: "Présence à des congrès internationaux et des événements spécialisés en tant que conférencier et expert.",
        trust_3_t: "Projets de Conseil",
        trust_3_d: "Soutien réussi aux entreprises et aux investisseurs dans des projets complexes en Afrique de l'Ouest et centrale.",

        cont_label: "Contact",
        cont_title: "Parlons de votre projet en Afrique.",
        form_name: "Nom",
        form_mail: "E-Mail",
        form_msg: "Message",
        form_send: "Envoyer le message",

        foot_nav: "Navigation",
        foot_legal: "Juridique",
        foot_imp: "Mentions Légales",
        foot_priv: "Confidentialité"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_expertise: "Expertise",
        nav_trust: "Trust",
        nav_contact: "Contact",

        hero_title: "SUCCESSFUL IN AFRICA.",
        hero_subtitle: "Your Partner for Business in Africa",
        btn_consult: "Request Consultation",
        btn_discover: "Discover Services",

        about_label: "About Sipua Consulting",
        about_head: "Bridge Builder. Expert. Partner.",
        about_text_1: "Benefit from many years of experience, sound market knowledge and reliable networks in Africa. SIPUA CONSULTING successfully accompanies companies, institutions and investors.",
        about_quote: "\"Successful business in Africa requires more than capital – it needs understanding, trust and the right connections.\"",

        serv_label: "Our Services",
        serv_head: "Holistic Consulting",
        serv_1_t: "Business Development",
        serv_1_d: "Strategic business development for companies and investors with a focus on Africa.",
        serv_2_t: "Networking & Decision Makers",
        serv_2_d: "Direct access to business leaders and government agencies at all levels.",
        serv_3_t: "PPP Project Management",
        serv_3_d: "Professional support for Public-Private Partnerships from conception to implementation.",
        serv_4_t: "Market Entry Strategies",
        serv_4_d: "Tailor-made concepts for sustainable success in the African economic area.",
        serv_5_t: "Renewable Energy",
        serv_5_d: "Specialization in solar energy, off-grid systems and sustainable energy projects.",
        serv_6_t: "Communication & Moderation",
        serv_6_d: "Experienced moderator and speaker for international events and intercultural mediation.",

        exp_label: "In-depth Expertise",
        exp_title: "Structure for your Success",
        exp_g1: "Strategy & Analysis",
        exp_1_1: "Support decision-making processes",
        exp_1_2: "Develop strategic concepts",
        exp_1_3: "Market analyses & feasibility",

        exp_g2: "Implementation & Business",
        exp_2_1: "Business models & concepts",
        exp_2_2: "Actionable business plans",
        exp_2_3: "Economic framework conditions",

        exp_g3: "Local Competence",
        exp_3_1: "Laws & location factors",
        exp_3_2: "Building relationships locally",
        exp_3_3: "Market knowledge",

        exp_g4: "Cultural Bridges",
        exp_4_1: "Intercultural communication",
        exp_4_2: "Business ethics & values",
        exp_4_3: "Relationship building DACH-Africa",

        trust_label: "References",
        trust_title: "Trust through Experience",
        trust_1_t: "African Energy Forum",
        trust_1_d: "Long-standing presence and expertise in the energy sector. Lecture at the African Energy Forum.",
        trust_2_t: "International Appearances",
        trust_2_d: "Presence at international congresses and specialist events as a speaker and expert.",
        trust_3_t: "Consulting Projects",
        trust_3_d: "Successful support of companies and investors in complex projects in West and Central Africa.",

        cont_label: "Contact",
        cont_title: "Let's talk about your Africa project.",
        form_name: "Name",
        form_mail: "E-Mail",
        form_msg: "Message",
        form_send: "Send Message",

        foot_nav: "Navigation",
        foot_legal: "Legal",
        foot_imp: "Legal Notice",
        foot_priv: "Privacy Policy"
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);

    // Update Text
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        // Simple check if button title or text matches lang
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    document.documentElement.lang = lang;
}
