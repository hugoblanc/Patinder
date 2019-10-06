import { Component } from '@angular/core';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public list: any[] = [
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
  ];
  public limit = 1;
  public bypassLimit = false;

  constructor(public toastController: ToastController) { }

  displayElement(index: number): boolean {
    if (this.bypassLimit) {
      return true;
    }
    return index < this.limit;
  }

  async deleteItem(index: number) {
    // TODO: delete back
    this.list.splice(index, 1);
    await this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Suppression effectué',
      duration: 2000
    });
    toast.present();
  }

  moreItem(): number {
    return this.list.length - this.limit;
  }
}
