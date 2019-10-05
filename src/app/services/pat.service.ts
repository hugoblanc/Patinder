import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatService {


  public values: any[] = [{
    datasetid: 'jep_spi_2019',
    recordid: '0c6f93c4a5dc6d0622e6196792bd1f20311396ce',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/2919ef51aa284384b967cd9e92f0ff37.thumb.image.jpg',
      ville: 'Cernay-la-Ville',
      conditions_de_participation: 'Gratuit / Sur inscription',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: '\u00a9J-F.Humbert',
      image: 'https://cibul.s3.amazonaws.com/2919ef51aa284384b967cd9e92f0ff37.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/balade-commentee-sur-les-plantes-sauvages-comestibles-et-medicinales-au-moyen-age',
      derniere_ouverture: '10:30',
      titre_fr: 'Balade comment\u00e9e sur les plantes sauvages comestibles et m\u00e9dicinales au Moyen \u00c2ge',
      premiere_fermeture: '17:00',
      description_du_lieu_fr: 'Le Petit Moulin a longtemps appartenu \u00e0 l\u2019abbaye des Vaux-de-Cernay, et l\u2019exploitation du Grand Moulin de l\u2019Abbaye \u00e9tait souvent li\u00e9e \u00e0 celle du Petit Moulin. Les deux \u00e9difices \u00e9taient en effet tr\u00e8s proches et la notion de cha\u00eene solidaire prend ici tous son sens puisque l\u2019un ne pouvait travailler sans l\u2019autre.',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'Un parcours aux abords du Petit Moulin \u00e0 la d\u00e9couverte des plantes sauvages comestibles',
      acces_itineraire_fr: 'En transport en commun : Acc\u00e8s en BALADOBUS le dimanche (pass journ\u00e9e \u00e0 4 euros et pass famille 20 euros). En voiture : le long de la D91 en direction de Dampierre apr\u00e8s le hameau de la vall\u00e9e, se garer au parking sur la gauche apr\u00e8s le Petit Moulin.',
      lien_d_inscription: '01 30 88 70 86',
      image_source: 'https://cibul.s3.amazonaws.com/2919ef51aa284384b967cd9e92f0ff37.full.image.jpg',
      creation_de_la_fiche: '2019-06-11T15:00:09.000Z',
      horaires_iso: '2019-09-21T15:00:00+02:00-2019-09-21T17:00:00+02:00\n2019-09-22T10:30:00+02:00-2019-09-22T12:30:00+02:00',
      types_d_evenement: 'Circuit',
      derniere_mise_a_jour: '2019-07-28T22:16:55.000Z',
      longitude: '1.964648',
      latitude: '48.677396',
      identifiant_du_lieu: '65250669',
      site_web_du_lieu: 'http://www.parc-naturel-chevreuse.fr',
      wgs84: [
        48.677396,
        1.964648
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 15h00 \u00e0 17h00\ndimanche 22 septembre - 10h30 \u00e0 12h30',
      derniere_fermeture: '12:30',
      adresse: 'Rue des Vaux 78720 Cernay-la-Ville',
      departement: 'Yvelines',
      telephone_du_lieu: '01 30 52 09 09',
      premiere_date: '2019-09-21',
      mots_cles_fr: 'petit moulin, cernay, vaux, plantes, nature',
      code_postal: '78720',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Petit moulin des Vaux-de-Cernay',
      liens_du_lieu: 'http://www.parc-naturel-chevreuse.fr/une-autre-vie-sinvente-ici/vie-sociale-et-culturelle-preservation-du-patrimoine/le-petit-moulin-des',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Rendez-vous au parking L\u00e9opold (sur la route D91, \u00e0 gauche apr\u00e8s le Petit Moulin)',
      tags_du_lieu: '\u00c9difice rural|Espace naturel, parc, jardin|Mus\u00e9e, salle d\'exposition',
      premiere_ouverture: '15:00',
      description_longue_fr: 'Pendant la Guerre de Cent Ans, un moine, Dauxmichel, va vivre en solitaire dans les Vaux \u00e0 proximit\u00e9 du ru pendant 12 ans, \u00ab souvent r\u00e9duit \u00e0 manger de l\u2019herbe comme une b\u00eate \u00bb.Un parcours aux abords du Petit Moulin va vous permettre de d\u00e9couvrir une liste impressionnante de plantes sauvageonnes comestibles, aujourd\u2019hui r\u00e9pertori\u00e9es comme de v\u00e9ritables alicaments. Les l\u00e9gumes de demain ?'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        1.964648,
        48.677396
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '5614bde7d3fe70c1ba0ef7e0c8e2dfc9d3679c26',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/5d9d2f45d7bf433db0517e06710fa485.thumb.image.jpg',
      ville: 'Oncy-sur-\u00c9cole',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'Sous licence libre',
      image: 'https://cibul.s3.amazonaws.com/5d9d2f45d7bf433db0517e06710fa485.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/eglise-saint-martin-oncy-sur-ecole-en-fete',
      derniere_ouverture: '16:00',
      titre_fr: 'Concert exceptionnel de Gospel',
      premiere_fermeture: '17:30',
      description_du_lieu_fr: 'L\'\u00e9glise romane Saint-Martin d\u2019Oncy-sur-Ecole \u00e9difi\u00e9e au XIe si\u00e8cle est une des plus anciennes du d\u00e9partement de l\'Essonne. Elle est un t\u00e9moin, remarquable pour la r\u00e9gion, des constructions de l\u2019\u00e9poque. L\u2019\u00e9difice de taille tr\u00e8s modeste pr\u00e9sente une partie romane assez rare en G\u00e2tinais et une d\u00e9coration int\u00e9rieure fort int\u00e9ressante.',
      resume_horaires_fr: 'Dimanche 22 septembre, 16h00',
      description_fr: 'Eglise Saint-Martin, Oncy-sur-Ecole en f\u00eate :\nconcert de Gospel traditionnel avec le groupe Psalmody Quartet',
      image_source: 'https://cibul.s3.amazonaws.com/5d9d2f45d7bf433db0517e06710fa485.full.image.jpg',
      creation_de_la_fiche: '2019-06-12T15:10:56.000Z',
      horaires_iso: '2019-09-22T16:00:00+02:00-2019-09-22T17:30:00+02:00',
      types_d_evenement: 'Concert',
      derniere_mise_a_jour: '2019-07-28T21:32:51.000Z',
      longitude: '2.474189',
      latitude: '48.381205',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location62611055.jpg',
      identifiant_du_lieu: '62611055',
      site_web_du_lieu: 'http://www.oncy-sur-ecole.fr/',
      wgs84: [
        48.381205,
        2.474189
      ],
      horaires_detailles_fr: 'dimanche 22 septembre - 16h00 \u00e0 17h30',
      derniere_fermeture: '17:30',
      adresse: 'Rue de l\'\u00e9glise 91490 Oncy-sur-Ecole',
      departement: 'Essonne',
      premiere_date: '2019-09-22',
      code_postal: '91490',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Eglise Saint-Martin d\'Oncy-sur-Ecole',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Participation libre, dons au profit de l\'entretien de l\'\u00e9glise.',
      tags_du_lieu: 'Exceptional opening|\u00c9difice religieux|First participation',
      premiere_ouverture: '16:00',
      description_longue_fr: 'La passion de PSALMODY Quartet pour le Negro-Spiritual et le Gospel tient \u00e0 la force des messages que ces chants r\u00e9v\u00e8lent. \u00c0 travers cette expression musicale tr\u00e8s vivante o\u00f9 se m\u00ealent m\u00e9lancolie et consolation, enthousiasme et esp\u00e9rance, les rythmes marqu\u00e9s dominent pour \u00e9mouvoir.Si depuis 1980 le parcours de PSALMODY Quartet s\u2019inscrit essentiellement en r\u00e9gion parisienne et en Bourgogne, le groupe s\u2019est produit \u00e9galement dans toute la France (Antilles, Angoul\u00eame, Roubaix, Rouen, Strasbourg, Toulouse notamment...) Bien que les concerts puissent avoir lieu dans des endroits prestigieux tels que la Sainte Chapelle, Le Petit Journal, des th\u00e9\u00e2tres, des centres culturels, l\'\u00e2me du Negro-Spiritual et du Gospel se r\u00e9v\u00e8le dans les lieux de culte, comme l\u2019\u00e9glise Saint-Eustache, Saint-Merry \u00e0 Parisou la petite \u00e9glise de Perrigny en Bourgogne. Les 4 chanteurs seront accompagn\u00e9s par un pianiste.'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.474189,
        48.381205
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '852815d8bfeadfe504eccdbaf27b96d27f26aa4b',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/847733dc491443b4b1a012e49f53f973.thumb.image.jpg',
      ville: 'Aubervilliers',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'DR',
      image: 'https://cibul.s3.amazonaws.com/847733dc491443b4b1a012e49f53f973.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/ferme-mazier-avec-la-pepiniere',
      derniere_ouverture: '12:00',
      titre_fr: 'Ferme Mazier avec la P\u00e9pini\u00e8re',
      premiere_fermeture: '20:00',
      description_du_lieu_fr: 'L\u2019existence de la Ferme remonte au XVIIe si\u00e8cle selon les d\u00e9clarations terrier conserv\u00e9es aux archives de Saint-Denis. L\u2019\u00e9quipe du service de la culture de la ville de La Courneuve a r\u00e9alis\u00e9 une \u00e9tude tr\u00e8s compl\u00e8te de l\u2019histoire de la maison et de son occupation du XVIIe au XXe si\u00e8cle, \u00e9tude qui pourrait \u00eatre mobilis\u00e9e dans un futur projet. La famille Mazier, propri\u00e9taire de la Ferme, exploite le site jusqu\u2019en 1962. Lorsque M. Mazier arr\u00eate son activit\u00e9, il laisse totalement intacts les b\u00e2timents de la ferme. Cette maison a conserv\u00e9 sa fonction initiale depuis le XVIIe si\u00e8cle. C\u2019est l\u00e0 son int\u00e9r\u00eat car beaucoup d\u2019autres fermes aux environs ont \u00e9t\u00e9 transform\u00e9es. La Plaine des Vertus nourrit le tout Paris jusque dans les ann\u00e9es 1960, le pass\u00e9 agricole se retrouve \u00e7\u00e0 et l\u00e0 dans l\u2019architecture de la commune. La ferme Mazier, dernier t\u00e9moignage patrimonial du pass\u00e9 mara\u00eecher de la commune, ouvre ses portes et vous fait d\u00e9couvrir les r\u00e9sultats du deuxi\u00e8me chantier \u00e9cole entam\u00e9 depuis le printemps et encadr\u00e9 par Apij Bat. Ce Chantier \u00e9cole est men\u00e9 dans le cadre de parcours de r\u00e9insertion professionnelle dans les m\u00e9tiers du b\u00e2timent.',
      resume_horaires_fr: 'Samedi 21 septembre, 12h00',
      description_fr: 'La P\u00e9pini\u00e8re met \u00e0 l\u2019honneur deux piliers du patrimoine Albertivillarien',
      lien_d_inscription: '01 48 34 35 37',
      age_maximum: '99',
      image_source: 'https://cibul.s3.amazonaws.com/847733dc491443b4b1a012e49f53f973.full.image.jpg',
      creation_de_la_fiche: '2019-07-04T09:30:33.000Z',
      horaires_iso: '2019-09-21T12:00:00+02:00-2019-09-21T20:00:00+02:00',
      types_d_evenement: 'Atelier / D\u00e9monstration / Savoir-faire',
      derniere_mise_a_jour: '2019-07-28T09:04:52.000Z',
      longitude: '2.377284',
      latitude: '48.916968',
      identifiant_du_lieu: '23079754',
      site_web_du_lieu: 'http://www.aubervilliers.fr',
      wgs84: [
        48.916968,
        2.377284
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 12h00 \u00e0 20h00',
      derniere_fermeture: '20:00',
      adresse: '70 rue Heurtault 93300 Aubervilliers',
      departement: 'Seine-Saint-Denis',
      premiere_date: '2019-09-21',
      code_postal: '93300',
      derniere_date: '2019-09-21',
      nom_du_lieu: 'Ferme Mazier',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Entr\u00e9e libre',
      tags_du_lieu: '\u00c9difice rural|Villes et Pays d\'art et d\'histoire',
      premiere_ouverture: '12:00',
      description_longue_fr: 'La P\u00e9pini\u00e8re met \u00e0 l\u2019honneur deux piliers du patrimoine Albertivillarien : le savon (la ville a connue de nombreuses usines de fabrication de savons) et le Hip Hop ! Venez groover au son du collectif \u00ab Salade de freaks \u00bb et apprendre \u00e0 faire vos produits d\u2019entretien ! (Ateliers pour adultes uniquement).'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.377284,
        48.916968
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '22fea5687f7c77ebc0f1d3f72bdf41f068436e24',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/2210ba99907c4ec98ddf5f9b48d03cea.thumb.image.jpg',
      ville: 'Villeneuve-Saint-Georges',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'jpvic',
      image: 'https://cibul.s3.amazonaws.com/2210ba99907c4ec98ddf5f9b48d03cea.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/bal-guinguette-au-bord-de-leau',
      derniere_ouverture: '12:00',
      titre_fr: 'Bal \u00e0 la Guinguette Auvergnate en bord de Seine',
      premiere_fermeture: '18:00',
      description_du_lieu_fr: 'Situ\u00e9e en bords de Seine, la Guinguette Auvergnate vous propose des d\u00e9jeuners dansants le dimanche et des soir\u00e9es musicales le vendredi.  Plats r\u00e9gionaux sp\u00e9cialit\u00e9s Auvergne et Sud Ouest. Label Patrimoine Int\u00e9r\u00eat  R\u00e9gional',
      resume_horaires_fr: 'Dimanche 22 septembre, 12h00',
      description_fr: 'D\u00e9jeuner dansant avec d\u00e9monstration des danses auvergnates',
      acces_itineraire_fr: 'RER D, Villeneuve Triage Bus 182, Triage Terminus',
      lien_d_inscription: '01 43 89 04 64, guin@wanadoo.fr',
      image_source: 'https://cibul.s3.amazonaws.com/2210ba99907c4ec98ddf5f9b48d03cea.full.image.jpg',
      credits_de_l_image_du_lieu: 'jpvicguinguetteauvergnnate',
      creation_de_la_fiche: '2019-06-28T06:16:32.000Z',
      horaires_iso: '2019-09-22T12:00:00+02:00-2019-09-22T18:00:00+02:00',
      types_d_evenement: 'Atelier / D\u00e9monstration / Savoir-faire',
      derniere_mise_a_jour: '2019-07-28T17:28:58.000Z',
      longitude: '2.436224',
      accessibilite_fr: 'handicap moteur',
      latitude: '48.747493',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location54461437.jpg',
      identifiant_du_lieu: '54461437',
      site_web_du_lieu: 'https://www.guinguette-auvergnate.fr',
      wgs84: [
        48.747493,
        2.436224
      ],
      horaires_detailles_fr: 'dimanche 22 septembre - 12h00 \u00e0 18h00',
      derniere_fermeture: '18:00',
      adresse: '19 avenue de Choisy 94190 Villeneuve-Saint-Georges',
      departement: 'Val-de-Marne',
      telephone_du_lieu: '01 43 89 04 64',
      premiere_date: '2019-09-22',
      code_postal: '94190',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'La Guinguette Auvergnate',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'D\u00e9jeuner dansant payant',
      tags_du_lieu: 'Tourisme et handicap|First participation|Lieu de spectacles, sports et loisirs',
      premiere_ouverture: '12:00',
      description_longue_fr: 'D\u00e9jeuner dansant suivi du traditonnel bal du dimanche. D\u00e9monstrations et initiations aux danses auvergnates ouvertes \u00e0 tous.'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.436224,
        48.747493
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '1724b87bc03ef072b40d8625e3453f8ea1d3f007',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/9e0f1db4809f4311a365a67dea21dc64.thumb.image.jpg',
      ville: 'Nogent-sur-Marne',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'MABA, Laurent Champoussin',
      image: 'https://cibul.s3.amazonaws.com/9e0f1db4809f4311a365a67dea21dc64.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/ouverture-de-la-bibliotheque-smith-lesouef',
      derniere_ouverture: '12:00',
      titre_fr: 'Ouverture de la biblioth\u00e8que Smith-Lesou\u00ebf',
      premiere_fermeture: '18:00',
      description_du_lieu_fr: 'La Biblioth\u00e8que Smith-Lesou\u00ebf, \u00e9tablissement de la Fondation des Artistes, est ouverte au public pour divers \u00e9v\u00e9nements ponctuels (conf\u00e9rences, concerts, performance).',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'La biblioth\u00e8que Smith-Lesou\u00ebf dont la r\u00e9novation vient d\'\u00eatre achev\u00e9e sera exceptionnellement ouverte au public',
      age_maximum: '99',
      image_source: 'https://cibul.s3.amazonaws.com/9e0f1db4809f4311a365a67dea21dc64.full.image.jpg',
      creation_de_la_fiche: '2019-07-04T11:16:30.000Z',
      horaires_iso: '2019-09-21T12:00:00+02:00-2019-09-21T18:00:00+02:00\n2019-09-22T12:00:00+02:00-2019-09-22T18:00:00+02:00',
      types_d_evenement: 'Visite libre',
      derniere_mise_a_jour: '2019-07-28T12:58:10.000Z',
      latitude: '48.836334',
      identifiant_du_lieu: '55308555',
      site_web_du_lieu: 'https://www.fondationdesartistes.fr/lieu/bibliotheque/',
      wgs84: [
        48.836334,
        2.486949
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 12h00 \u00e0 18h00\ndimanche 22 septembre - 12h00 \u00e0 18h00',
      arrondissement: 'Nogent Village',
      derniere_fermeture: '18:00',
      adresse: '14 bis rue Charles VII 94130 Nogent-sur-Marne',
      departement: 'Val-de-Marne',
      premiere_date: '2019-09-21',
      mots_cles_fr: 'biblioth\u00e8que, nogent-sur-marne',
      code_postal: '94130',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Biblioth\u00e8que Smith-Lesou\u00ebf (Fondation des artistes)',
      region: '\u00cele-de-France',
      longitude: '2.486949',
      tags_du_lieu: 'Exceptional opening|\u00c9difice scolaire et \u00e9ducatif',
      premiere_ouverture: '12:00',
      description_longue_fr: 'Situ\u00e9e entre les num\u00e9ros 14 et 16 de la rue Charles VII de Nogent-sur-Marne, la biblioth\u00e8que Smith-Lesou\u00ebf a \u00e9t\u00e9 \u00e9difi\u00e9e entre 1913 et 1917 \u00e0 la demande des s\u0153urs Smith, afin de pouvoir accueillir les collections de leur oncle bibliophile, Auguste Lesou\u00ebf. Restaur\u00e9e en 2018, la biblioth\u00e8que pr\u00e9sente un nouvel accrochage constitu\u00e9 des objets d\u2019art et des peintures ayant appartenu \u00e0 Auguste Lesou\u00ebf, qui y sont r\u00e9install\u00e9es gr\u00e2ce \u00e0 un d\u00e9p\u00f4t consenti par la Biblioth\u00e8que nationale de France.'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.486949,
        48.836334
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'f1d8a1e7081787c946e6ef2acf87ee4568e31df5',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/a1987c31dcae4c8584c2462c73b9025a.thumb.image.jpg',
      ville: 'Wy-dit-Joli-Village',
      conditions_de_participation: 'Gratuit / Sur inscription',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: '\u00a9 Francine GARNIER',
      image: 'https://cibul.s3.amazonaws.com/a1987c31dcae4c8584c2462c73b9025a.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/atelier-jardin-des-secrets',
      derniere_ouverture: '14:00',
      titre_fr: 'Atelier "Jardin des secrets"',
      premiere_fermeture: '17:00',
      description_du_lieu_fr: 'Au c\u0153ur du Vexin fran\u00e7ais, dans la charmante commune de Wy-dit-joli-Village, le Mus\u00e9e de l\u2019Outil - Collection Claude et Fran\u00e7oise Pigeard et ses florissants jardins baignent dans une atmosph\u00e8re bucolique.De la forge de Claude Pigeard \u00e0 la collection d\u2019outils et d\u2019ustensiles caract\u00e9ristiques des arts et traditions populaires du Vexin fran\u00e7ais, en passant par les vestiges d\u2019un baln\u00e9aire gallo-romain, ce lieu magique accueille ateliers, visites guid\u00e9es et animations.Embellis avec amour pendant des d\u00e9cennies par Fran\u00e7oise et Claude Pigeard, le mus\u00e9e et ses jardins d\'inspiration m\u00e9di\u00e9vale forment aujourd\u2019hui un pr\u00e9cieux \u00e9crin pour des repr\u00e9sentations th\u00e9\u00e2trales ou chor\u00e9graphiques, des concerts, des projections cin\u00e9matographiques, des expositions et des r\u00e9sidences d\u2019artistes ou d\u2019\u00e9crivains. La pr\u00e9sence d\'un baln\u00e9aire gallo-romain class\u00e9 aux Monuments historiques au sein de cette demeure compl\u00e8te la visite.Les touristes comme les promeneurs, les enfants comme leurs grands-parents, trouveront mati\u00e8re \u00e0 satisfaire leur curiosit\u00e9 dans ce mus\u00e9e aux multiples facettes.Nouveaut\u00e9 au Mus\u00e9e : des tablettes tactiles ont \u00e9t\u00e9 mises \u00e0 disposition du public. Vous pourrez d\u00e9couvrir 5 vid\u00e9os traitant du Mus\u00e9e de l\'Outil, ainsi qu\'un jeu ludique et interactif.Ces applications sont disponibles en t\u00e9l\u00e9chargement gratuit pour smartphones et tablettes. N\'h\u00e9sitez pas \u00e0 les d\u00e9couvrir :Le Mus\u00e9e de l\'Outil : L\'Application Applehttps://itunes.apple.com/us/app/le-mus%C3%A9e-de-loutil-lapplication/id1231015371?mt=8Le Mus\u00e9e de l\'Outil : Le jeuhttp://www.furetcompany.com/site/portfolio/musee-de-loutil-du-val-doise/Entr\u00e9e libre et gratuiteAccessible aux personnes \u00e0 mobilit\u00e9 r\u00e9duiteOuverture \u00e0 partir du 1er mai 2018De 13 h \u00e0 17 h 30 du mercredi au vendredi.De 13 h \u00e0 18 h le samedi, le dimanche et les jours f\u00e9ri\u00e9s.Ferm\u00e9 le lundi et le mardi.',
      resume_horaires_fr: 'Samedi 21 septembre, 14h00',
      description_fr: 'Venez tisser vos secrets dans le jardin. Atelier filaire avec pratique ludique du tissage et du macram\u00e9. Participation \u00e0 l\'\u0153uvre et son inscription dans le jardin. Par Francine Garnier, artiste.',
      acces_itineraire_fr: 'En voiture A15 > D14, sortie 17 > Guiry-en-Vexin (Mus\u00e9e arch\u00e9ologique du Val-d\'Oise) > Wy-dit-Joli-Village (Mus\u00e9e de l\'Outil - Collection Claude et Fran\u00e7oise Pigeard).',
      lien_d_inscription: 'http://www.valdoise.fr/musee-archeologique',
      image_source: 'https://cibul.s3.amazonaws.com/a1987c31dcae4c8584c2462c73b9025a.full.image.jpg',
      creation_de_la_fiche: '2019-07-05T08:20:43.000Z',
      horaires_iso: '2019-09-21T14:00:00+02:00-2019-09-21T17:00:00+02:00',
      types_d_evenement: 'Atelier / D\u00e9monstration / Savoir-faire',
      derniere_mise_a_jour: '2019-07-28T12:11:25.000Z',
      longitude: '1.83543',
      latitude: '49.102098',
      identifiant_du_lieu: '52750085',
      site_web_du_lieu: 'http://WWW.valdoise.fr',
      wgs84: [
        49.102098,
        1.83543
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 14h00 \u00e0 17h00',
      derniere_fermeture: '17:00',
      adresse: 'Rue de la Mairie 95420 Wy-dit-Joli-Village',
      departement: 'Val-d\'Oise',
      telephone_du_lieu: '01 34 67 00 91',
      premiere_date: '2019-09-21',
      mots_cles_fr: 'exposition, art, cr\u00e9ation, tissage, land art',
      code_postal: '95420',
      derniere_date: '2019-09-21',
      nom_du_lieu: 'Mus\u00e9e de l\'Outil',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: '\u00c0 partir de 7 ans. Entr\u00e9e libre sur inscription.',
      tags_du_lieu: 'Mus\u00e9e, salle d\'exposition|Jardin remarquable',
      premiere_ouverture: '14:00',
      description_longue_fr: 'Venez tisser vos secrets dans le jardin. Atelier filaire avec pratique ludique du tissage et du macram\u00e9. Participation \u00e0 l\'\u0153uvre et son inscription dans le jardin. Par Francine Garnier, artiste.'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        1.83543,
        49.102098
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '4545987f7561a4a6f84f2490f15ea626d6dc61d5',
    fields: {
      departement: 'Yvelines',
      description_longue_fr: 'Achev\u00e9e en 1871, l\u2019\u00e9glise Saint-Lubin est une \u0153uvre de jeunesse de l\u2019architecte Anatole de Baudot, le plus illustre des \u00e9l\u00e8ves de Viollet-le-Duc. Lors du mariage du fils du pr\u00e9sident Lebrun, elle \u00e9tait encore orn\u00e9e d\u2019un chatoyant d\u00e9cor peint. L\u2019h\u00f4tel des Postes, encore en projet en 1932, est quant \u00e0 lui un parfait exemple du style Art D\u00e9co.',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      identifiant_du_lieu: '50528387',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/leglise-et-lhotel-des-postes',
      derniere_ouverture: '16:30',
      titre_fr: 'Visite guid\u00e9e de l\'\u00e9glise et de l\'h\u00f4tel des Postes',
      premiere_fermeture: '17:00',
      description_du_lieu_fr: 'Achev\u00e9e en 1871, l\u2019\u00e9glise Saint-Lubin est une \u0153uvre de jeunesse d\u2019Anatole de Baudot, le plus grand des \u00e9l\u00e8ves de Viollet-le-Duc. Ce dernier y ouvrit la voie \u00e0 l\u2019architecture du XXe si\u00e8cle. Des r\u00e9am\u00e9nagements successifs, notamment l\u2019installation de vitraux de Gabriel Loire en 1970, ont profond\u00e9ment transform\u00e9 notre perception de cette \u0153uvre architecturale, laquelle m\u00e9rite d\u2019ailleurs d\u2019\u00eatre remise \u00e0 l\u2019honneur. Le r\u00e9cent nettoyage du clocher-porche a ainsi permis de r\u00e9v\u00e9ler la blondeur de la pierre.',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'L\u2019\u00e9glise Saint-Lubin est une \u0153uvre de jeunesse d\'Anatole de Baudot, tandis que l\'h\u00f4tel des Postes est un parfait exemple du style Art d\u00e9co.',
      creation_de_la_fiche: '2019-07-12T10:06:19.000Z',
      horaires_iso: '2019-09-21T16:30:00+02:00-2019-09-21T17:00:00+02:00\n2019-09-22T16:30:00+02:00-2019-09-22T17:00:00+02:00',
      types_d_evenement: 'Circuit',
      derniere_mise_a_jour: '2019-07-28T08:21:47.000Z',
      longitude: '1.823773',
      latitude: '48.646315',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location84700733.jpg',
      wgs84: [
        48.646315,
        1.823773
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 16h30 \u00e0 17h00\ndimanche 22 septembre - 16h30 \u00e0 17h00',
      derniere_fermeture: '17:00',
      adresse: 'Place Jeanne-d\'Arc 78120 Rambouillet',
      telephone_du_lieu: '01 34 83 21 21',
      premiere_date: '2019-09-21',
      code_postal: '78120',
      derniere_date: '2019-09-22',
      nom_du_lieu: '\u00c9glise Saint-Lubin',
      ville: 'Rambouillet',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Acc\u00e8s libre',
      tags_du_lieu: '\u00c9difice religieux|Villes et Pays d\'art et d\'histoire',
      premiere_ouverture: '16:30'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        1.823773,
        48.646315
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'e3f808f8b654944eb25780e49f5f602394754c95',
    fields: {
      description_longue_fr: 'Gr\u00e2ce aux explications d\'un guide-conf\u00e9rencier et au kit du petit po\u00e8te, les enfants pourront \u00e9crire le po\u00e8me qui refl\u00e8tera au mieux le monument qu\u2019ils auront choisi. Les \u0153uvres pourront directement \u00eatre envoy\u00e9es pour participation au concours Patrimoines en po\u00e9sie. A vos plumes, pr\u00eats, partez !',
      code_postal: '77100',
      horaires_detailles_fr: 'samedi 21 septembre - 15h00 \u00e0 16h30',
      categorie_spi: 'Patrimoines en po\u00e9sie',
      ville: 'Meaux',
      adresse: '5 place Charles-de-Gaulle',
      nom_du_lieu: 'Cit\u00e9 \u00e9piscopale de Meaux',
      lien: 'http://www.tourisme-paysdemeaux.com/2870-visite-decouverte-de-la-cite-episcopale-comment-jecris-un-poeme-dans-le-cadre-du-concours',
      detail_des_conditions_fr: 'Sur r\u00e9servation\n01 83 69 02 10 ou kelly.jung@gmail.com',
      titre_fr: 'Atelier d\'\u00e9criture "Tous \u00e0 vos plumes"',
      longitude: '2.877943',
      description_fr: 'Gr\u00e2ce aux explications d\'un guide-conf\u00e9rencier et au kit du petit po\u00e8te, les enfants pourront \u00e9crire le po\u00e8me qui refl\u00e8tera au mieux le monument qu\u2019ils auront choisi. Les \u0153uvres pourront directement \u00eatre envoy\u00e9es pour participation au concours Patrimoines en po\u00e9sie. A vos plumes, pr\u00eats, partez !',
      latitude: '48.96063',
      wgs84: [
        48.96063,
        2.877943
      ],
      types_d_evenement: 'Jeune public',
      conditions_de_participation: 'Gratuit / Sur inscription'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.877943,
        48.96063
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'ae3fd9215b3a6503ef504a84ab557ea6ce978b81',
    fields: {
      description_longue_fr: '\u00c0 l\u2019occasion du jeu-concours\u00a0Patrimoines en po\u00e9sie, d\u00e9couvre qui \u00e9tait Jean Cocteau. Apr\u00e8s une courte visite de sa maison, viens t\u2019installer dans le jardin fleuri pour \u00e9crire ton po\u00e8me. Laisse-toi inspirer par les \u0153uvres de l\u2019artiste\u00a0: romans, films, peintures,\u2026\u00a0 les id\u00e9es ne devraient pas manquer\u00a0!',
      code_postal: '91490',
      horaires_detailles_fr: 'dimanche 22 septembre - 14h30 \u00e0 16h30',
      categorie_spi: 'Patrimoines en po\u00e9sie',
      ville: 'Milly-la-For\u00eat',
      adresse: '15, rue du Lau',
      image: 'http://patrimoines.iledefrance.fr/sites/default/files/custom-custom_size_photo_cocteau.jpg',
      nom_du_lieu: 'Maison Cocteau',
      lien: 'http://www.maisoncocteau.net/',
      detail_des_conditions_fr: 'Sur r\u00e9servation \u00e0 inventaire-patrimoine@iledefrance.fr',
      titre_fr: 'Immersion po\u00e9tique dans l\u2019univers de Jean Cocteau',
      credits_image: '\u00a9 Philippe Ayrault, R\u00e9gion \u00cele-de-France, 2019',
      longitude: '2.46475',
      description_fr: '\u00c0 l\u2019occasion du jeu-concours\u00a0Patrimoines en po\u00e9sie, d\u00e9couvre qui \u00e9tait Jean Cocteau. Apr\u00e8s une courte visite de sa maison, viens t\u2019installer dans le jardin fleuri pour \u00e9crire ton po\u00e8me. Laisse-toi inspirer par les \u0153uvres de l\u2019artiste\u00a0: romans, films, peintures,\u2026\u00a0 les id\u00e9es ne devraient pas manquer\u00a0!',
      latitude: '48.4023',
      wgs84: [
        48.4023,
        2.46475
      ],
      types_d_evenement: 'Jeune public',
      conditions_de_participation: 'Gratuit / Sur inscription'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.46475,
        48.4023
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'f9aeed32ba7dbdb0ce8f458e944134e36325b234',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/c77edecc541842ff8b15a7bc968516cf.thumb.image.jpg',
      ville: 'Coupvray',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'mairie de Coupvray',
      image: 'https://cibul.s3.amazonaws.com/c77edecc541842ff8b15a7bc968516cf.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/visite-guidee-du-site-des-rohan',
      derniere_ouverture: '14:00',
      titre_fr: 'Visite guid\u00e9e du site des Rohan',
      premiere_fermeture: '19:00',
      description_du_lieu_fr: 'Le parc du ch\u00e2teau d\'une superficie de 45 hectares. Vous pourrez vous y promener pour fl\u00e2ner le long du bassin, contempler les ruines du ch\u00e2teau, admirer les communs et les jardins, ou tout simplement pour le plaisir de la balade. Du ch\u00e2teau de Coupvray, nous ne connaissons ni l\'architecte ni les dates exactes de sa construction mais tout laisse penser que le commanditaire en fut Hercule de Rohan \u00e0 la fin du XVIe si\u00e8cle et que sa construction fut achev\u00e9e en 1603. Durant deux si\u00e8cles, le domaine  fut la propri\u00e9t\u00e9 de la maison Rohan-Gu\u00e9m\u00e9n\u00e9, jusqu\'\u00e0 sa vente en 1791 aux fr\u00e8res Tourteau par le Cardinal de Strasbourg. Ce dernier s\u2019est rendu c\u00e9l\u00e8bre dans"l\'affaire du collier de la reine". Le marquis Tourteau d\'Orvilliers agrandit le parc et acheva un am\u00e9nagement"\u00e0 l\'anglaise" commenc\u00e9 \u00e0 la fin du XVIIIe si\u00e8cle. \u00c9tienne de Turenne h\u00e9rite du domaine. Il le revend en 1869 au 3\u00e8me duc de Tr\u00e9vise, petit fils du Mar\u00e9chal Mortier. Entre 1916 et 1956  le domaine passe du Comte de Kerveguen \u00e0 sa fille Th\u00e9r\u00e8se, \u00e9pouse de Fran\u00e7ois de Brignac. Le domaine sera c\u00e9d\u00e9 en 1980 \u00e0 Jean-Pierre Lieuven. Aujourd\u2019hui, il est devenu propri\u00e9t\u00e9 de la commune de Coupvray. Les ruines du ch\u00e2teau ont \u00e9t\u00e9 consolid\u00e9es et le pigeonnier restaur\u00e9. Les toitures des communs ont \u00e9t\u00e9 refaites. Les b\u00e2timents sont en cours de restauration. Les anciennes \u00e9curies et la Forge ont \u00e9t\u00e9 am\u00e9nag\u00e9es pour accueillir des expositions. La ferme du ch\u00e2teau : Elle fut construite au d\u00e9but du XVIIe si\u00e8cle sur l\'emplacement d\'un ancien fief f\u00e9odal : le fief Maulny. Elle fut la propri\u00e9t\u00e9 de notables parisiens avant d\'\u00eatre vendue en 1688 aux religieux Trinitaires dont le couvent \u00e9tait contigu. Faute de pouvoir l\'entretenir, les religieux la revendirent en 1754 au prince Constantin de Rohan, Seigneur de Coupvray, qui engagea d\'importants travaux de restauration et la transforma en ferme typiquement briarde. Avec le couvent, elle fut vendue comme bien national \u00e0 la R\u00e9volution puis rachet\u00e9e \u00e0 la Restauration par le marquis Tourteau d\'Orvilliers, propri\u00e9taire du ch\u00e2teau, qui construisit une bergerie (improprement appel\u00e9e "grange aux d\u00eemes") pour son \u00e9levage de M\u00e9rinos. Jules B\u00e9nard et son fils l\'exploit\u00e8rent dans la seconde moiti\u00e9 du XIXe si\u00e8cle en y d\u00e9veloppant de nouvelles cultures (l\'endive, la betterave). Associ\u00e9es aux progr\u00e8s techniques, comme un nouveau mode de fabrication du Brie, ces initiatives furent salu\u00e9es et r\u00e9compens\u00e9es. L\'activit\u00e9 agricole y ayant cess\u00e9 suite \u00e0 la vente de ses terres au Groupe Disneyland en 1987, la ferme et la Grange aux d\u00eemes ont \u00e9t\u00e9 achet\u00e9es par la commune de Coupvray. Apr\u00e8s avoir \u00e9t\u00e9 atteints par la temp\u00eate de 1999, les b\u00e2timents abandonn\u00e9s ont d\u00fb \u00eatre sauv\u00e9s en urgence par le remplacement de toutes les toitures. Une premi\u00e8re phase de restauration a concern\u00e9 l\'aile nord transform\u00e9e en salle de r\u00e9ception ainsi que le pigeonnier qui dessert maintenant un atelier de l\'association"Renaissance et Culture" au rez-de-chauss\u00e9e et le club de billard \u00e0 l\'\u00e9tage. La maison de ma\u00eetre est am\u00e9nag\u00e9e pour accueillir d\'autres associations. L\'aile sud ainsi que la grange aux d\u00eemes font l\'objet d\'une op\u00e9ration globale de r\u00e9habilitation.',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'Visite des communs et du parc du ch\u00e2teau',
      acces_itineraire_fr: 'Autoroute A4 : sortie 14 Disneyland-Paris, puis suivre Coupvray-Mairie Train : ligne Paris Est - Meaux, arr\u00eat gare d\'Esbly, puis 20 minutes \u00e0 pied RER A : ligne A, arr\u00eat Val d\'Europe, puis taxi le week-end Entr\u00e9e du Parc du ch\u00e2teau sur la D 5A \u00e0 l\'entr\u00e9e du village. Parking possible dans la ferme du ch\u00e2teau juste en face ou sur le parking du parc de l\'Harmonie',
      age_maximum: '99',
      image_source: 'https://cibul.s3.amazonaws.com/c77edecc541842ff8b15a7bc968516cf.full.image.jpg',
      creation_de_la_fiche: '2019-06-25T12:29:02.000Z',
      horaires_iso: '2019-09-21T14:00:00+02:00-2019-09-21T19:00:00+02:00\n2019-09-22T14:00:00+02:00-2019-09-22T19:00:00+02:00',
      types_d_evenement: 'Visite comment\u00e9e / Conf\u00e9rence',
      derniere_mise_a_jour: '2019-08-10T10:40:14.000Z',
      age_minimum: '7',
      longitude: '2.79287',
      latitude: '48.8872',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location94597516.jpg',
      identifiant_du_lieu: '14793453',
      site_web_du_lieu: 'http://www.coupvray.fr',
      wgs84: [
        48.8872,
        2.79287
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 14h00 \u00e0 19h00\ndimanche 22 septembre - 14h00 \u00e0 19h00',
      derniere_fermeture: '19:00',
      adresse: 'RD 5A 77700 Coupvray',
      departement: 'Seine-et-Marne',
      premiere_date: '2019-09-21',
      mots_cles_fr: 'parc, jardin',
      code_postal: '77700',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Ch\u00e2teau, ferme et grange aux d\u00eemes',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Entr\u00e9e libre',
      tags_du_lieu: 'Ch\u00e2teau, h\u00f4tel urbain, palais, manoir|Espace naturel, parc, jardin',
      premiere_ouverture: '14:00',
      description_longue_fr: 'D\u00e9part toutes les heures rondes \u00e0 partir de la salle des \u00e9curies \u00e0 c\u00f4t\u00e9 du colombier. Vous pourrez y voir une exposition du "petit patrimoine de Coupvray" mont\u00e9e par l\'Atelier Histoire et Patrimoine. Visite des communs (salle de la comtesse, lavoir int\u00e9rieur, colombier, fruitier) et du parc, dont le nouveau jardin inaugur\u00e9 le 18 mai 2019.Commentaires sur l\'histoire du ch\u00e2teau et ses propri\u00e9taires successifs.Les visites du vendredi sont plus sp\u00e9cialement destin\u00e9es aux \u00e9l\u00e8ves et figurent dans le programme des enfants du Patrimoine.'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.79287,
        48.8872
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '15579639b449b21dc23f20a0268f1cb6f53e68e4',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/c08a62aad6d44d19a42976aea4c0e324.thumb.image.jpg',
      description_longue_fr: 'De jeunes musiciens vous offrent un interlude musicale et convivial.',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: '\u00a9Mairie-Champagne-sur-Seine',
      image: 'https://cibul.s3.amazonaws.com/c08a62aad6d44d19a42976aea4c0e324.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/musique-a-leglise-russe',
      derniere_ouverture: '16:00',
      titre_fr: 'Musique \u00e0 l\'\u00c9glise russe',
      premiere_fermeture: '17:00',
      description_du_lieu_fr: 'Suite \u00e0  la r\u00e9volution bolch\u00e9vique de 1917, quelques familles d\u2019immigr\u00e9s s\u2019installent \u00e0 Champagne-sur-Seine. Les hommes y trouvent facilement un emploi, puisque l\u2019usine Schneider recrute de la main d\u2019\u0153uvre. L\u2019int\u00e9gration de ces nouveaux habitants se fait progressivement, malgr\u00e9 l\u2019obstacle de la langue.D\u00e9sireux de se retrouver pour partager leur culture et leurs souvenirs, les membres de la communaut\u00e9 russe se regroupent et fondent l\u2019association \u00ab Colonie russe \u00bb. Trois ans plus tard, \u00e9merge le projet d\u2019\u00e9riger une \u00e9glise.Gr\u00e2ce \u00e0 sa situation sur\u00e9lev\u00e9e et d\u00e9gag\u00e9e, le terrain choisi convient bien pour la construction d\u2019une \u00e9glise, et chaque famille verse une somme pour l\u2019achat des mat\u00e9riaux et du terrain. Les hommes participent \u00e0 l\u2019\u00e9dification de la chapelle, selon les projets de l\u2019architecte Popandopoulos. Commenc\u00e9s le 14 mai 1938, les travaux sont achev\u00e9s rapidement. L\u2019\u00e9glise est consacr\u00e9e le 24 septembre 1939 et d\u00e9di\u00e9e \u00e0 \u00ab Notre-Dame de Toutes les Protections \u00bb. L\u2019\u00e9glise accueillera quelques c\u00e9l\u00e9brations au fil des ann\u00e9es, o\u00f9 un pope se d\u00e9pla\u00e7ait \u00e0 la demande de la communaut\u00e9.Avec la disparition de la plupart des membres de la communaut\u00e9 vers la fin des ann\u00e9es 1970, le petit groupe de Russes encore vaillants d\u00e9cide devant notaire, de dissoudre l\u2019association et de faire donation de l\u2019\u00e9difice \u00e0 la commune.  Apr\u00e8s deux ans de proc\u00e9dure, le 24 juin 1982, la commune de Champagne re\u00e7oit par donation le b\u00e2timent et le terrain. La communaut\u00e9 russe exprime le souhait dans l\u2019acte : \u00ab que la commune de Champagne affecte tout ou partie du b\u00e2timent, objet de la donation, \u00e0 un mus\u00e9e ouvert au public, perp\u00e9tuant le souvenir des combattants des Arm\u00e9es Russes pendant la guerre de 1914-1918 contre l\u2019Allemagne et l\u2019Autriche-Hongrie \u00bb.Pendant une vingtaine d\u2019ann\u00e9e, le b\u00e2timent reste ignor\u00e9, ferm\u00e9. Des photos de la construction sont r\u00e9cup\u00e9r\u00e9es. Un professeur d\u2019histoire du coll\u00e8ge \u00e9crit quatre fascicules sur la communaut\u00e9 russe gr\u00e2ce aux t\u00e9moignages de ses voisins russes. Quelques visites scolaires ont lieu. Mais le lieu est vandalis\u00e9, beaucoup d\u2019objet de culte disparaissent.Dans les ann\u00e9es 2000 quelques Champenois prennent alors conscience de l\u2019int\u00e9r\u00eat de ce monument.L\u2019\u00e9glise est nettoy\u00e9e, les acc\u00e8s sont s\u00e9curis\u00e9s, un entretien est r\u00e9alis\u00e9. Un groupe de Champenois l\u2019am\u00e9nagent pour l\u2019ouvrir lors des journ\u00e9es du patrimoine. \u00c0 partir de 2010, la ville investit dans la restauration des ic\u00f4nes et choisit une restauratrice agr\u00e9\u00e9e par les Monuments Historiques.En 2012, l\u2019inventaire du patrimoine industriel, men\u00e9e par le R\u00e9gion (Nicolas Pierrot) et le d\u00e9partement, r\u00e9v\u00e8le, en particulier aux Champenois, la valeur de leur patrimoine et de leur pass\u00e9 ouvrier. Un projet de restauration ambitieux doit permettre de faire de l\u2019\u00e9glise russe un lieu de m\u00e9moire.L\u2019\u00e9glise russe a re\u00e7u deux labels :- Lieu religieux du XXe si\u00e8cle d\u00e9cern\u00e9 par le minist\u00e8re de la culture en 2011- Patrimoine d\u2019int\u00e9r\u00eat r\u00e9gional par la r\u00e9gion \u00cele-de-France',
      resume_horaires_fr: 'Dimanche 22 septembre, 16h00',
      description_fr: 'Musique \u00e0 l\u2019\u00c9glise russe \u00e0 17h',
      acces_itineraire_fr: 'SNCF Champagne-sur Seine Pref\u00e9rer l\'acc\u00e8s en voiture, l\'\u00e9glise \u00e9tant loin de la gare.',
      age_maximum: '77',
      image_source: 'https://cibul.s3.amazonaws.com/c08a62aad6d44d19a42976aea4c0e324.full.image.jpg',
      creation_de_la_fiche: '2019-06-18T14:03:50.000Z',
      horaires_iso: '2019-09-22T16:00:00+02:00-2019-09-22T17:00:00+02:00',
      types_d_evenement: 'Concert',
      derniere_mise_a_jour: '2019-07-28T17:08:59.000Z',
      age_minimum: '7',
      longitude: '2.805445',
      accessibilite_fr: 'handicap moteur|handicap psychique|handicap visuel',
      latitude: '48.392178',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location37135826.jpg',
      identifiant_du_lieu: '71926776',
      site_web_du_lieu: 'http://www.champagne-sur-seine.fr',
      wgs84: [
        48.392178,
        2.805445
      ],
      horaires_detailles_fr: 'dimanche 22 septembre - 16h00 \u00e0 17h00',
      derniere_fermeture: '17:00',
      adresse: 'Chemin de la Garde-de-Dieu 169 rue Grande 77430 Champagne-sur-Seine',
      departement: 'Seine-et-Marne',
      telephone_du_lieu: '01 64 69 59 35',
      premiere_date: '2019-09-22',
      mots_cles_fr: 'Concert, musique, \u00e9glise, russe, Champagne-sur-Seine, Visite guid\u00e9e, animations enfants',
      code_postal: '77430',
      derniere_date: '2019-09-22',
      nom_du_lieu: '\u00c9glise russe orthodoxe Notre-Dame-de-toutes-les-protections',
      ville: 'Champagne-sur-Seine',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Gratuit',
      tags_du_lieu: 'Mus\u00e9e, salle d\'exposition|\u00c9difice religieux',
      premiere_ouverture: '16:00'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.805445,
        48.392178
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '4268ecad6ac5005e8e45b22665cb214db0cba23b',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/e646edb3823f40b0b30910b02ed62aba.thumb.image.jpg',
      ville: 'Villeneuve-Saint-Georges',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'jpvicguinguetteauvergnate',
      image: 'https://cibul.s3.amazonaws.com/e646edb3823f40b0b30910b02ed62aba.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/repas-et-danses-auvergnates-a-la-guinguette',
      derniere_ouverture: '12:00',
      titre_fr: 'Danses auvergnates \u00e0 la guinguette',
      premiere_fermeture: '19:00',
      description_du_lieu_fr: 'Situ\u00e9e en bords de Seine, la Guinguette Auvergnate vous propose des d\u00e9jeuners dansants le dimanche et des soir\u00e9es musicales le vendredi.  Plats r\u00e9gionaux sp\u00e9cialit\u00e9s Auvergne et Sud Ouest. Label Patrimoine Int\u00e9r\u00eat  R\u00e9gional',
      resume_horaires_fr: 'Dimanche 22 septembre, 12h00',
      description_fr: 'Repas et danses traditionnelles du bal des guinguettes et auvergnates',
      acces_itineraire_fr: 'RER D, Villeneuve Triage Bus 182, Triage Terminus',
      age_maximum: '99',
      image_source: 'https://cibul.s3.amazonaws.com/e646edb3823f40b0b30910b02ed62aba.full.image.jpg',
      credits_de_l_image_du_lieu: 'jpvicguinguetteauvergnnate',
      creation_de_la_fiche: '2019-06-28T08:51:34.000Z',
      horaires_iso: '2019-09-22T12:00:00+02:00-2019-09-22T19:00:00+02:00',
      types_d_evenement: 'Atelier / D\u00e9monstration / Savoir-faire',
      derniere_mise_a_jour: '2019-07-28T17:28:35.000Z',
      longitude: '2.436224',
      accessibilite_fr: 'handicap moteur|handicap psychique|handicap visuel',
      latitude: '48.747493',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location54461437.jpg',
      identifiant_du_lieu: '54461437',
      site_web_du_lieu: 'https://www.guinguette-auvergnate.fr',
      wgs84: [
        48.747493,
        2.436224
      ],
      horaires_detailles_fr: 'dimanche 22 septembre - 12h00 \u00e0 19h00',
      derniere_fermeture: '19:00',
      adresse: '19 avenue de Choisy 94190 Villeneuve-Saint-Georges',
      departement: 'Val-de-Marne',
      telephone_du_lieu: '01 43 89 04 64',
      premiere_date: '2019-09-22',
      code_postal: '94190',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'La Guinguette Auvergnate',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'R\u00e9servation conseill\u00e9e pour se restaurer. Menu sp\u00e9cial Arts et Divertissements : 30\u20ac',
      tags_du_lieu: 'Tourisme et handicap|First participation|Lieu de spectacles, sports et loisirs',
      premiere_ouverture: '12:00',
      description_longue_fr: 'La guinguette du dimanche en bord de Seine\nRepas et danses d\'Auvergne ; orchestre traditionnel dans une ambiance familiale et conviviale ; d\u00e9monstrations et initiations \u00e0 la danse auvergnate\nPour ceux qui souhaitent se restaurer : menu sp\u00e9cial Arts et Divertissements : 30\u20ac (boisson comprise)/menu enfant : 20\u20ac'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.436224,
        48.747493
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'b272d34dffa5c49a18beb975fd7685511a17d59f',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/c7fda9150ce64f5b8f2b356c65111f5b.thumb.image.jpg',
      description_longue_fr: '\u00c0 l\'occasion des Journ\u00e9es europ\u00e9ennes du patrimoine, le parc sera exceptionnellement ouvert au public.',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'MABA 2018',
      image: 'https://cibul.s3.amazonaws.com/c7fda9150ce64f5b8f2b356c65111f5b.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/ouverture-exceptionnelle-du-parc',
      derniere_ouverture: '12:00',
      titre_fr: 'Ouverture exceptionnelle du parc de la Fondation des Artistes',
      premiere_fermeture: '17:45',
      description_du_lieu_fr: 'La Maison d\'Art Bernard Anthonioz (MABA) est un centre d\'art d\u00e9di\u00e9 \u00e0 la cr\u00e9ation contemporaine.',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: '\u00c0 l\'occasion des Journ\u00e9es europ\u00e9ennes du patrimoine, le parc sera exceptionnellement ouvert au public.',
      acces_itineraire_fr: 'Entr\u00e9e libre',
      age_maximum: '99',
      image_source: 'https://cibul.s3.amazonaws.com/c7fda9150ce64f5b8f2b356c65111f5b.full.image.jpg',
      creation_de_la_fiche: '2019-07-04T11:20:45.000Z',
      horaires_iso: '2019-09-21T12:00:00+02:00-2019-09-21T17:45:00+02:00\n2019-09-22T12:00:00+02:00-2019-09-22T17:45:00+02:00',
      types_d_evenement: 'Visite libre',
      derniere_mise_a_jour: '2019-07-28T12:56:38.000Z',
      longitude: '2.486991',
      latitude: '48.836224',
      identifiant_du_lieu: '99242692',
      site_web_du_lieu: 'https://www.fondationdesartistes.fr/lieu/maba/',
      wgs84: [
        48.836224,
        2.486991
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 12h00 \u00e0 17h45\ndimanche 22 septembre - 12h00 \u00e0 17h45',
      arrondissement: 'Port sous la Lune',
      derniere_fermeture: '17:45',
      adresse: '16 rue Charles VII 94130 Nogent-sur-Marne',
      departement: 'Val-de-Marne',
      telephone_du_lieu: '01 48 71 90 07',
      premiere_date: '2019-09-21',
      mots_cles_fr: 'jardin, parc, nogent-sur-marne, artistes',
      code_postal: '94130',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Maison d\'Art Bernard Anthonioz (Fondation des artistes)',
      ville: 'Nogent-sur-Marne',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Visite libre',
      tags_du_lieu: 'Mus\u00e9e, salle d\'exposition|Espace naturel, parc, jardin|Maison, appartement, atelier de personnes c\u00e9l\u00e8bres',
      premiere_ouverture: '12:00'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.486991,
        48.836224
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'e2c25ad35f75c1f51f60752ddad03093612e1581',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/4df19da91d7f44709792c6a62d6d2d10.thumb.image.jpg',
      ville: 'Nogent-sur-Marne',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'MABA, Laurent Champoussin',
      image: 'https://cibul.s3.amazonaws.com/4df19da91d7f44709792c6a62d6d2d10.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/visite-patrimoniale-du-site-de-la-fondation-des-artistes',
      derniere_ouverture: '14:30',
      titre_fr: 'Visite patrimoniale du site de la Fondation des Artistes',
      premiere_fermeture: '15:30',
      description_du_lieu_fr: 'La Maison d\'Art Bernard Anthonioz (MABA) est un centre d\'art d\u00e9di\u00e9 \u00e0 la cr\u00e9ation contemporaine.',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'La visite patrimoniale propose de d\u00e9couvrir l\'histoire particuli\u00e8re des domaines du 14 et 16 rue Charles VII. La visite \u00e9voque ainsi l\'histoire des maisons et de leurs propri\u00e9taires, les s\u0153urs Smith.',
      acces_itineraire_fr: 'Entr\u00e9e libre',
      age_maximum: '99',
      image_source: 'https://cibul.s3.amazonaws.com/4df19da91d7f44709792c6a62d6d2d10.full.image.jpg',
      creation_de_la_fiche: '2019-07-04T11:59:16.000Z',
      horaires_iso: '2019-09-21T14:30:00+02:00-2019-09-21T15:30:00+02:00\n2019-09-22T14:30:00+02:00-2019-09-22T15:30:00+02:00',
      types_d_evenement: 'Visite comment\u00e9e / Conf\u00e9rence',
      derniere_mise_a_jour: '2019-07-28T12:56:52.000Z',
      latitude: '48.836224',
      identifiant_du_lieu: '99242692',
      site_web_du_lieu: 'https://www.fondationdesartistes.fr/lieu/maba/',
      wgs84: [
        48.836224,
        2.486991
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 14h30 \u00e0 15h30\ndimanche 22 septembre - 14h30 \u00e0 15h30',
      arrondissement: 'Port sous la Lune',
      derniere_fermeture: '15:30',
      adresse: '16 rue Charles VII 94130 Nogent-sur-Marne',
      departement: 'Val-de-Marne',
      telephone_du_lieu: '01 48 71 90 07',
      premiere_date: '2019-09-21',
      code_postal: '94130',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Maison d\'Art Bernard Anthonioz (Fondation des artistes)',
      region: '\u00cele-de-France',
      longitude: '2.486991',
      tags_du_lieu: 'Mus\u00e9e, salle d\'exposition|Espace naturel, parc, jardin|Maison, appartement, atelier de personnes c\u00e9l\u00e8bres',
      premiere_ouverture: '14:30'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.486991,
        48.836224
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'd38d8fa373816aee005b6fe6da6a98b6a566efe3',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/c84a328e385f4d66a214027e79a89e2b.thumb.image.jpg',
      ville: 'Mantes-la-Jolie',
      conditions_de_participation: 'Gratuit / Sur inscription',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'Service Patrimoine & Tourisme, Ville de Mantes-la-Jolie',
      image: 'https://cibul.s3.amazonaws.com/c84a328e385f4d66a214027e79a89e2b.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/le-pavillon-duhamel-un-ancien-musee',
      derniere_ouverture: '11:30',
      titre_fr: 'Visite du Pavillon Duhamel, un ancien mus\u00e9e.',
      premiere_fermeture: '12:30',
      description_du_lieu_fr: 'Construit par Maurice Nalet et inaugur\u00e9 en 1909, le Pavillon Duhamel pr\u00e9sente une architecture qui combine \u00e0 la fois le progr\u00e8s technique du XIXe si\u00e8cle, \u00e0 travers l\'utilisation de mat\u00e9riaux de construction nouveaux et une permanence de la tradition avec un recours aux formes du pass\u00e9, qui se traduit par un style architectural n\u00e9o-classique. Il fut construit \u00e0 la demande de Victor Duhamel et de son \u00e9pouse, dans le but d\u2019accueillir leurs collections. Ces \u0153uvres furent c\u00e9d\u00e9es \u00e0 la Ville \u00e0 la condition que le b\u00e2timent garde sa fonction de mus\u00e9e. En 1940, le mus\u00e9e fut ferm\u00e9 pour cause de guerre. Les collections furent alors mises en caisse et conserv\u00e9es hors de danger. Elles sont actuellement expos\u00e9es et conserv\u00e9es au mus\u00e9e de l\'H\u00f4tel-Dieu. Apr\u00e8s-guerre, le b\u00e2timent connut plusieurs affectations. Il accueillit alors une biblioth\u00e8que, puis des expositions et enfin une \u00e9cole de musique. Aujourd\u2019hui, le pavillon est principalement consacr\u00e9 \u00e0 une programmation de conf\u00e9rences, d\'expositions temporaires et d\'animations culturelles.',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'Visite g\u00e9n\u00e9rale autour de son histoire et de son architecture accompagn\u00e9e d\'une exposition de cartes postales anciennes.',
      acces_itineraire_fr: 'Acc\u00e8s uniquement pi\u00e9ton par l\'H\u00f4tel de Ville, rue Gambetta, ou par la rue L\'\u00c9vesque',
      lien_d_inscription: '01 34 78 86 60, 01 34 78 86 70',
      image_source: 'https://cibul.s3.amazonaws.com/c84a328e385f4d66a214027e79a89e2b.full.image.jpg',
      creation_de_la_fiche: '2019-07-02T15:00:39.000Z',
      horaires_iso: '2019-09-21T11:30:00+02:00-2019-09-21T12:30:00+02:00\n2019-09-22T11:30:00+02:00-2019-09-22T12:30:00+02:00',
      types_d_evenement: 'Visite comment\u00e9e / Conf\u00e9rence',
      derniere_mise_a_jour: '2019-07-28T14:57:46.000Z',
      longitude: '1.7142',
      latitude: '48.987942',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location41498640.jpg',
      identifiant_du_lieu: '66464278',
      site_web_du_lieu: 'http://www.manteslajolie.fr',
      wgs84: [
        48.987942,
        1.7142
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 11h30 \u00e0 12h30\ndimanche 22 septembre - 11h30 \u00e0 12h30',
      derniere_fermeture: '12:30',
      adresse: 'Square Brieussel-Bourgeois 78200 Mantes-la-Jolie',
      departement: 'Yvelines',
      telephone_du_lieu: '01 34 78 86 60',
      premiere_date: '2019-09-21',
      mots_cles_fr: 'Mus\u00e9e - Beaux arts - Explorateurs - Voyage - Label Patrimoine int\u00e9ret r\u00e9gional - Maurice Nalet - Architecture - Victor Duhamel',
      code_postal: '78200',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Pavillon Duhamel',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Acc\u00e8s Rue l\'Evesque - Sur r\u00e9servation - 30 personnes maximum',
      tags_du_lieu: 'Lieu de spectacles, sports et loisirs|Mus\u00e9e, salle d\'exposition',
      premiere_ouverture: '11:30',
      description_longue_fr: 'Le pavillon Duhamel, construit par l\u2019architecte Maurice Nalet, abritait autrefois un mus\u00e9e du m\u00eame nom, ouvert en 1906 avec plus de 2 240 oeuvres. Il tire sa singularit\u00e9 de sa richesse d\u00e9corative.'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        1.7142,
        48.987942
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'aaca1daac31ba3260166a2b29e336e73a8ccc3b6',
    fields: {
      departement: 'Yvelines',
      description_longue_fr: 'L\u2019arriv\u00e9e du chemin de fer, en 1849, va faire de Rambouillet une destination de vill\u00e9giature. On y vient pour la belle saison ou pour la chasse. Des aristocrates ou de grandes fortunes y font construire des ch\u00e2teaux de chasseurs, tandis que la bourgeoisie industrielle et commer\u00e7ante y fait \u00e9difier de belles villas.\nCette visite guid\u00e9e apporte des \u00e9l\u00e9ments de contexte au mariage du fils du pr\u00e9sident Lebrun de 1932, qui a inspir\u00e9 la pi\u00e8ce "Mariage pr\u00e9sidentiel".Les pr\u00e9sidents et leurs invit\u00e9s contribuent \u00e0 l\'\u00e9poque \u00e0 faire de Rambouillet une station touristique \u00e0 la mode.',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      identifiant_du_lieu: '46201873',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/les-belles-villas-de-la-villegiature',
      derniere_ouverture: '16:30',
      titre_fr: 'Visite guid\u00e9e "Les belles villas de la vill\u00e9giature"',
      premiere_fermeture: '17:00',
      detail_des_conditions_fr: 'Acc\u00e8s libre',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'L\u2019arriv\u00e9e du chemin de fer, en 1849, va faire de Rambouillet une destination de vill\u00e9giature. De belles villas se construisent peu \u00e0 peu.',
      creation_de_la_fiche: '2019-07-12T10:08:40.000Z',
      horaires_iso: '2019-09-21T16:30:00+02:00-2019-09-21T17:00:00+02:00\n2019-09-22T16:30:00+02:00-2019-09-22T17:00:00+02:00',
      types_d_evenement: 'Visite comment\u00e9e / Conf\u00e9rence',
      derniere_mise_a_jour: '2019-08-28T10:38:12.000Z',
      latitude: '48.645285',
      site_web_du_lieu: 'http://www.rambouillet.fr',
      wgs84: [
        48.645285,
        1.819207
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 16h30 \u00e0 17h00\ndimanche 22 septembre - 16h30 \u00e0 17h00',
      derniere_fermeture: '17:00',
      adresse: '78120 Rambouillet',
      telephone_du_lieu: '01 34 83 21 21',
      premiere_date: '2019-09-21',
      code_postal: '78120',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Rambouillet, Place Th\u00f4me-Paten\u00f4tre',
      ville: 'Rambouillet',
      region: '\u00cele-de-France',
      longitude: '1.819207',
      tags_du_lieu: 'Villes et Pays d\'art et d\'histoire|Espace naturel, parc, jardin',
      premiere_ouverture: '16:30'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        1.819207,
        48.645285
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'f1714709450b4d563bd1bb4934111e6addb88c5f',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/813d7106ae0043d0bfc9d6eb9878bc75.thumb.image.jpg',
      description_longue_fr: 'Le mus\u00e9e Daubigny invite les enfants \u00e0 participer au jeu-concours Patrimoine en po\u00e9sie\nDu 21 septembre au 31 d\u00e9cembre, le mus\u00e9e propose aux enfants de s\'inspirer des \u0153uvres des expositions Camille Corot et Daubigny pour r\u00e9aliser un po\u00e8me. Des jeux, astuces, mod\u00e8les sont mis \u00e0 disposition pour les y aider.',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Patrimoines en po\u00e9sie',
      credits_image: 'Minist\u00e8re de la Culture',
      image: 'https://cibul.s3.amazonaws.com/813d7106ae0043d0bfc9d6eb9878bc75.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/patrimoine-en-poesie_727095',
      derniere_ouverture: '14:00',
      titre_fr: 'Atelier "Patrimoines en po\u00e9sie" au mus\u00e9e Daubigny',
      premiere_fermeture: '12:30',
      description_du_lieu_fr: 'Le Mus\u00e9e Daubigny est un mus\u00e9e de Beaux-Arts qui poss\u00e8de quatre grandes collections : peinture des XIXe et XXe si\u00e8cles autour de la figure de Charles-Fran\u00e7ois Daubigny, \u0153uvres contemporaines (Alechinsky, Otto Freundlich, Messagier...), une collection d\'art animalier (Cocteau, Steinlen, Gall\u00e9...) et une collection d\'art na\u00eff (Lagarde, Epple...).',
      resume_horaires_fr: '21 et 22 septembre',
      description_fr: 'Le mus\u00e9e Daubigny invite les enfants \u00e0 participer au jeu-concours Patrimoine en po\u00e9sie\nDu 21 septembre au 31 d\u00e9cembre, le mus\u00e9e propose aux enfants de s\'inspirer des \u0153uvres des expositions Camille Corot et Daubigny pour r\u00e9aliser un po\u00e8me. Des jeux, astuces, mod\u00e8les sont mis \u00e0 disposition pour les y aider.',
      acces_itineraire_fr: 'SNCF gare d\'Auvers-sur-Oise / A15 et A115 sortie M\u00e9ry centre',
      age_maximum: '12',
      image_source: 'https://cibul.s3.amazonaws.com/813d7106ae0043d0bfc9d6eb9878bc75.full.image.jpg',
      tags_du_lieu: 'Mus\u00e9e, salle d\'exposition|Villes et Pays d\'art et d\'histoire',
      creation_de_la_fiche: '2019-07-02T12:29:04.000Z',
      horaires_iso: '2019-09-21T10:30:00+02:00-2019-09-21T12:30:00+02:00\n2019-09-21T14:00:00+02:00-2019-09-21T17:30:00+02:00\n2019-09-22T10:30:00+02:00-2019-09-22T12:30:00+02:00\n2019-09-22T14:00:00+02:00-2019-09-22T17:30:00+02:00',
      types_d_evenement: 'Jeune public',
      derniere_mise_a_jour: '2019-07-28T10:57:25.000Z',
      age_minimum: '8',
      longitude: '2.171874',
      latitude: '49.071308',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location37326115.jpg',
      identifiant_du_lieu: '91647025',
      site_web_du_lieu: 'http://museedaubigny.com',
      wgs84: [
        49.071308,
        2.171874
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 10h30 \u00e0 12h30\nsamedi 21 septembre - 14h00 \u00e0 17h30\ndimanche 22 septembre - 10h30 \u00e0 12h30\ndimanche 22 septembre - 14h00 \u00e0 17h30',
      derniere_fermeture: '17:30',
      adresse: 'Manoir des Colombi\u00e8res - Rue de la Sansonne 95430 Auvers-sur-Oise',
      departement: 'Val-d\'Oise',
      telephone_du_lieu: '01 30 36 80 20',
      premiere_date: '2019-09-21',
      code_postal: '95430',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Mus\u00e9e Daubigny',
      ville: 'Auvers-sur-Oise',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Entr\u00e9e libre',
      liens_du_lieu: 'https://www.facebook.com/musee.daubigny',
      premiere_ouverture: '10:30'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.171874,
        49.071308
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'f7905b73996ff674f62ed354dc41eba46ecef6ff',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/d009282cdd8c4d1b8ae438adcf3570af.thumb.image.jpg',
      ville: 'Louvres',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Patrimoines en po\u00e9sie',
      credits_image: 'JY Lac\u00f4te',
      image: 'https://cibul.s3.amazonaws.com/d009282cdd8c4d1b8ae438adcf3570af.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/il-etait-une-fois-orville',
      derniere_ouverture: '14:00',
      titre_fr: 'Il \u00e9tait une fois Orville',
      premiere_fermeture: '18:00',
      description_du_lieu_fr: 'Assi\u00e9g\u00e9 et d\u00e9truit durant la guerre de Cent ans, le ch\u00e2teau fait l\u2019objet de fouilles chaque \u00e9t\u00e9 depuis 2001. Ces recherches ont permis de reconstituer la forme probable du ch\u00e2teau fort et de d\u00e9couvrir une importante collection d\u2019objets comme une girouette ou la cha\u00eene du pont-levis. Dans le cadre de visites guid\u00e9es, ce site permet de d\u00e9couvrir le travail des arch\u00e9ologues, les vestiges du si\u00e8ge mais aussi les activit\u00e9s quotidiennes des paysans du Pays de France au d\u00e9but du Moyen \u00c2ge via des reconstitutions.',
      resume_horaires_fr: 'Samedi 21 septembre, 14h00',
      description_fr: 'Un ch\u00e2teau, une guerre, une girouette et des arch\u00e9ologues, tout ce qu\u2019il faut pour vous inspirer un beau po\u00e8me. Dans le cadre du concours Patrimoines en po\u00e9sie lanc\u00e9 par la R\u00e9gion Ile-de-France du 21 septembre au 31 d\u00e9cembre, Arch\u00e9a vous invite \u00e0 visiter le site arch\u00e9ologique du ch\u00e2teau d\u2019Orville \u00e0 Louvres, \u00e0 rencontrer les arch\u00e9ologues puis \u00e0 r\u00e9aliser un po\u00e8me.Atelier ouvert \u00e0 tous tout au long de l\u2019apr\u00e8s-midi, concours pour les enfants entre 8 et 12 ans. Lots \u00e0 gagner pour les 12 laur\u00e9ats du concours r\u00e9gional.',
      age_maximum: '99',
      image_source: 'https://cibul.s3.amazonaws.com/d009282cdd8c4d1b8ae438adcf3570af.full.image.jpg',
      credits_de_l_image_du_lieu: 'JY Lac\u00f4te',
      creation_de_la_fiche: '2019-07-04T17:06:27.000Z',
      horaires_iso: '2019-09-21T14:00:00+02:00-2019-09-21T18:00:00+02:00',
      types_d_evenement: 'Jeune public',
      derniere_mise_a_jour: '2019-07-28T15:13:39.000Z',
      age_minimum: '8',
      longitude: '2.496034',
      accessibilite_fr: 'handicap psychique',
      latitude: '49.036148',
      image_du_lieu: 'https://cibul.s3.amazonaws.com/location53380036.jpg',
      identifiant_du_lieu: '53380036',
      site_web_du_lieu: 'http://archea.roissypaysdefrance.fr',
      wgs84: [
        49.036148,
        2.496034
      ],
      horaires_detailles_fr: 'samedi 21 septembre - 14h00 \u00e0 18h00',
      derniere_fermeture: '18:00',
      adresse: 'Chemin d\'Orville 95380 Louvres',
      departement: 'Val-d\'Oise',
      premiere_date: '2019-09-21',
      code_postal: '95380',
      derniere_date: '2019-09-21',
      nom_du_lieu: 'Site arch\u00e9ologique d\'Orville',
      liens_du_lieu: 'https://www.facebook.com/archea.musee/',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Entr\u00e9e libre et gratuite',
      tags_du_lieu: 'Site arch\u00e9ologique',
      premiere_ouverture: '14:00',
      description_longue_fr: 'Un ch\u00e2teau, une guerre, une girouette et des arch\u00e9ologues, tout ce qu\u2019il faut pour vous inspirer un beau po\u00e8me. Dans le cadre du concours Patrimoines en po\u00e9sie lanc\u00e9 par la R\u00e9gion Ile-de-France du 21 septembre au 31 d\u00e9cembre, Arch\u00e9a vous invite \u00e0 visiter le site arch\u00e9ologique du ch\u00e2teau d\u2019Orville \u00e0 Louvres, \u00e0 rencontrer les arch\u00e9ologues puis \u00e0 r\u00e9aliser un po\u00e8me.Atelier ouvert \u00e0 tous tout au long de l\u2019apr\u00e8s-midi, concours pour les enfants entre 8 et 12 ans. Lots \u00e0 gagner pour les 12 laur\u00e9ats du concours r\u00e9gional.'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.496034,
        49.036148
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: 'd4d54ec5a5a1a2fa0574d61d7d6f9fcafaeebb23',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/90ed3ead32524355b8db963e6ad9da25.thumb.image.jpg',
      description_longue_fr: 'R\u00e9cemment labellis\u00e9 Patrimoine d\u2019int\u00e9r\u00eat r\u00e9gional, le site remarquable de la Faisanderie, au coeur de la for\u00eat de S\u00e9nart, fait dialoguer la \u00ab grande histoire \u00bb des rois de France avec celle de l\u2019art public monumental moderne.\n14h30 et 16h30 (entr\u00e9e libre): visite guid\u00e9e du domaine et du parc des sculptures par Emmanuelle Philippe, conservateur du patrimoine, R\u00e9gion Ile de France\n14h45 et 16h30 (sur inscription, jauge limit\u00e9e): Cin\u00e9-concert "En for\u00eat, en famille, en musique !" Venez d\u00e9couvrir des films amateurs in\u00e9dits accompagn\u00e9s au piano par Alexandre Chabbat : une promenade musicale, en for\u00eat et en famille, \u00e0 travers les archives amateurs collect\u00e9es par Cin\u00e9am. Escalades \u00e0 Fontainebleau en costumes trois pi\u00e8ces, chapeaux cloches et petits talons dans les ann\u00e9es 20, pique-nique \u00e0 Larchant en marcel blanc dans les ann\u00e9es 1960, travaux forestiers et chasse \u00e0 courre en for\u00eat de Rambouillet, chasse aux tr\u00e9sors, sorties dominicales en for\u00eat de S\u00e9nart, en automne, en hiver, au printemps, \u00e0 pied, \u00e0 v\u00e9lo\u2026 Autant d\u2019images qui \u00e9voquent avec po\u00e9sie et humour les multiples usages de la for\u00eat.\nEn partenariat avec la R\u00e9gion \u00cele-de-France, l\'ONF et CINEAM',
      conditions_de_participation: 'Gratuit / Sur inscription',
      categorie_spi: 'Visites propos\u00e9es par les chercheurs',
      credits_image: 'ONF',
      image: 'https://cibul.s3.amazonaws.com/90ed3ead32524355b8db963e6ad9da25.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/visite-de-la-faisanderie-detiolles_510404',
      derniere_ouverture: '14:30',
      titre_fr: 'Visite de la Faisanderie d\'\u00c9tiolles - dimanche 22 septembre',
      premiere_fermeture: '18:00',
      longitude: '2.492961',
      resume_horaires_fr: 'Dimanche 22 septembre, 14h30',
      description_fr: 'Faisanderie d\'Etiolles',
      lien_d_inscription: '01 69 91 57 27, a.grondard@grandparissud.fr, https://www.weezevent.com/journees-europeennes-du-patrimoine-visite-de-la-faisanderie-d-etiolles-dimanche',
      image_source: 'https://cibul.s3.amazonaws.com/90ed3ead32524355b8db963e6ad9da25.full.image.jpg',
      creation_de_la_fiche: '2019-06-27T14:06:33.000Z',
      horaires_iso: '2019-09-22T14:30:00+02:00-2019-09-22T18:00:00+02:00',
      types_d_evenement: 'Visite comment\u00e9e / Conf\u00e9rence',
      derniere_mise_a_jour: '2019-08-02T13:44:40.000Z',
      accessibilite_fr: 'handicap moteur',
      latitude: '48.656647',
      identifiant_du_lieu: '2299455',
      wgs84: [
        48.656647,
        2.492961
      ],
      horaires_detailles_fr: 'dimanche 22 septembre - 14h30 \u00e0 18h00',
      derniere_fermeture: '18:00',
      adresse: 'La Faisanderie, route de la faisanderie 91450 \u00c9tiolles',
      departement: 'Essonne',
      premiere_date: '2019-09-22',
      code_postal: '91450',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Faisanderie de S\u00e9nart',
      ville: '\u00c9tiolles',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Entr\u00e9e libre sur inscription',
      tags_du_lieu: 'First participation|\u00c9difice rural',
      premiere_ouverture: '14:30'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.492961,
        48.656647
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  },
  {
    datasetid: 'jep_spi_2019',
    recordid: '3439200da2f1b03d29a9d153d9335b9ba5120923',
    fields: {
      apercu: 'https://cibul.s3.amazonaws.com/56199c27c858499dada3d2780e5f7d24.thumb.image.jpg',
      ville: 'Cormeilles-en-Parisis',
      conditions_de_participation: 'Gratuit',
      categorie_spi: 'Label Patrimoine d\'int\u00e9r\u00eat r\u00e9gional',
      credits_image: 'libre',
      image: 'https://cibul.s3.amazonaws.com/56199c27c858499dada3d2780e5f7d24.base.image.jpg',
      lien: 'https://openagenda.com/jep-2019-ile-de-france/event/presentation-materiel-dun-hopital-de-campagne-premiere-guerre-mondiale',
      derniere_ouverture: '13:00',
      titre_fr: 'Pr\u00e9sentation du mat\u00e9riel d\'un h\u00f4pital de campagne lors de la Premi\u00e8re Guerre mondiale',
      premiere_fermeture: '12:00',
      description_du_lieu_fr: 'Le Fort de Cormeilles fut \u00e9difi\u00e9 entre 1874 et 1877 dans le cadre de la cr\u00e9ation du camp retranch\u00e9 de Paris, par le g\u00e9n\u00e9ral S\u00e9r\u00e9 de Rivi\u00e8re. Construit sur pr\u00e8s de 10 hectares, il pouvait recevoir 64 canons avec 1 100 hommes de troupe et 24 officiers. En 1914 il fut parmi les premiers \u00e0 \u00eatre \u00e9quip\u00e9 d\'une batterie anti-a\u00e9rienne, pour abattre les Zeppelins venus bombarder la capitale. Entre les deux guerres il servira d\'\u00e9tat-major pour un important r\u00e9giment de DCA de r\u00e9serve, le 407\u00e8me  RADCA. Les allemands utilis\u00e8rent le site pour y stocker des torpilles et il servit de prison pendant les 10 ann\u00e9es qui suivirent la Seconde Guerre mondiale. En 1967 il fut repris par le 23\u00e8me Rima de Maisons-Laffitte, il y installa un centre d\'initiation commando qui fonctionna jusqu\'en 1997. Le Fort fut ensuite vendu \u00e0 l\'Agence des Espaces Verts de la r\u00e9gion \u00ab Ile de France \u00bb qui le confia \u00e0 l\'association des \u00ab Amis du Fort de Cormeilles \u00bb en 1999. L\'association "les AFC" g\u00e8re le site et le remet en \u00e9tat : des ateliers d\'artistes y sont install\u00e9s et de nombreux tournages cin\u00e9matographiques s\'y sont produits en 15 ans (+ de 40). L\'association a ouvert depuis peu un mus\u00e9e militaire : il couvre la p\u00e9riode du Second Empire \u00e0 nos jours, en mettant un accent particulier sur la fortification, l\'arm\u00e9e fran\u00e7aise de 1914 \u00e0 nos jours, le Service Nationale et les troupes de R\u00e9serves. Trois salles sont ouvertes \u00e0 la visite.',
      resume_horaires_fr: 'Dimanche 22 septembre, 09h00, 13h00',
      description_fr: 'Pr\u00e9sentation du mat\u00e9riel d\'un h\u00f4pital de campagne lors de la Premi\u00e8re Guerre mondiale',
      acces_itineraire_fr: 'Parkings route Strat\u00e9gique devant les stades et tennis puis 200 m\u00e8tres \u00e0 pied.',
      age_maximum: '77',
      image_source: 'https://cibul.s3.amazonaws.com/56199c27c858499dada3d2780e5f7d24.full.image.jpg',
      creation_de_la_fiche: '2019-06-25T13:57:36.000Z',
      horaires_iso: '2019-09-22T09:00:00+02:00-2019-09-22T12:00:00+02:00\n2019-09-22T13:00:00+02:00-2019-09-22T14:00:00+02:00',
      types_d_evenement: 'Exposition',
      derniere_mise_a_jour: '2019-07-28T18:41:28.000Z',
      age_minimum: '4',
      longitude: '2.208754',
      accessibilite_fr: 'handicap moteur',
      latitude: '48.981098',
      identifiant_du_lieu: '2298059',
      site_web_du_lieu: 'https://fortdecormeilles.fr/',
      wgs84: [
        48.981098,
        2.208754
      ],
      horaires_detailles_fr: 'dimanche 22 septembre - 09h00 \u00e0 12h00\ndimanche 22 septembre - 13h00 \u00e0 14h00',
      derniere_fermeture: '14:00',
      adresse: 'Route Strat\u00e9gique 95240 Cormeilles-en-Parisis',
      departement: 'Val-d\'Oise',
      premiere_date: '2019-09-22',
      mots_cles_fr: 'infirmerie, hopital de campagne, 1ere guerre mondiale, fort de cormeilles en parisis',
      code_postal: '95240',
      derniere_date: '2019-09-22',
      nom_du_lieu: 'Fort de Cormeilles-en-Parisis',
      region: '\u00cele-de-France',
      detail_des_conditions_fr: 'Entr\u00e9e libre',
      tags_du_lieu: '\u00c9difice militaire, enceinte urbaine',
      premiere_ouverture: '09:00',
      description_longue_fr: 'Pr\u00e9sentation du mat\u00e9riel d\'un h\u00f4pital de campagne lors de la Premi\u00e8re Guerre mondiale'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        2.208754,
        48.981098
      ]
    },
    record_timestamp: '2019-09-13T11:32:22.384+02:00'
  }];


  private _patrimoine: any;

  constructor(private http: HttpClient) { }


  getPatrimoine(): any[] {
    return this.values;
  }

  setCurrentPatrimoine(patrimoine) {
    this._patrimoine = patrimoine;
  }

  getCurrentPatrimoine() {
    return this._patrimoine;
  }


  savePatrimoine(patrimoine: Patrimoine) {
    return this.http.post('https://patrimoine.harari.io/web/api/donation', { recordid: 'ZERTYUJJRE', user_id: 'YUI', amout: 10 });
  }

}
