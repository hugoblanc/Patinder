interface Patrimoine {
    datasetid: string;
    recordid: string;
    fields: Fields;
    geometry: Geometry;
    record_timestamp: string;
}

interface Geometry {
    type: string;
    coordinates: number[];
}

interface Fields {
    apercu: string;
    ville: string;
    conditions_de_participation: string;
    categorie_spi: string;
    credits_image: string;
    image: string;
    lien: string;
    derniere_ouverture: string;
    titre_fr: string;
    premiere_fermeture: string;
    description_du_lieu_fr: string;
    resume_horaires_fr: string;
    description_fr: string;
    acces_itineraire_fr: string;
    lien_d_inscription: string;
    image_source: string;
    creation_de_la_fiche: string;
    horaires_iso: string;
    types_d_evenement: string;
    derniere_mise_a_jour: string;
    longitude: string;
    latitude: string;
    identifiant_du_lieu: string;
    site_web_du_lieu: string;
    wgs84: number[];
    horaires_detailles_fr: string;
    derniere_fermeture: string;
    adresse: string;
    departement: string;
    telephone_du_lieu: string;
    premiere_date: string;
    mots_cles_fr: string;
    code_postal: string;
    derniere_date: string;
    nom_du_lieu: string;
    liens_du_lieu: string;
    region: string;
    detail_des_conditions_fr: string;
    tags_du_lieu: string;
    premiere_ouverture: string;
    description_longue_fr: string;
}