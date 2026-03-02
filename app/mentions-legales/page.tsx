import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto w-full max-w-2xl">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-white"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </Link>

          <h1 className="mt-6 text-xl font-bold uppercase tracking-[0.12em] sm:text-2xl">
            Mentions Légales & Politique de Confidentialité
          </h1>
          <div className="mt-4 h-px w-12 bg-[#5A0F14]" />
          <p className="mt-4 text-xs text-neutral-500">Dernière mise à jour : Janvier 2026</p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 text-sm leading-relaxed text-neutral-400">

          {/* Entreprise */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Informations sur l'entreprise
            </h2>
            <p>NEVEXA AUTOMOTIVE INC.</p>
            <p>100 King St W, Suite 5700</p>
            <p>Toronto, Ontario, M5X 1C7</p>
            <p>Canada</p>
          </div>

          {/* Responsable protection des données */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Contact & Responsable de la protection des données
            </h2>
            <p>
              Nevexa Automotive Inc. a désigné un Responsable de la protection des données chargé
              d'assurer la conformité avec la Loi sur la protection des renseignements personnels
              et les documents électroniques (LPRPDE) du Canada. Toute demande relative à la
              confidentialité, demande d'accès ou plainte doit être adressée à :
            </p>
            <p className="mt-3">
              E-mail :{" "}
              <a
                href="mailto:contact@nevexacars.com"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                contact@nevexacars.com
              </a>
            </p>
          </div>

          {/* Activité */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Activité
            </h2>
            <p>
              Nevexa Automotive Inc. est une société d'importation, de sourcing et d'exportation
              de véhicules opérant principalement entre le Canada et les marchés africains, avec
              des services de sourcing et de livraison internationaux disponibles sur demande.
              Les véhicules sont principalement sourcés auprès de concessionnaires nord-américains
              vérifiés et de sources fiables sélectionnées.
            </p>
          </div>

          {/* Collecte de données */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Informations personnelles collectées
            </h2>
            <p>
              Nous collectons des informations personnelles uniquement lorsque cela est nécessaire
              et exclusivement via les formulaires de notre site web. Cela peut inclure votre nom,
              adresse e-mail et numéro de téléphone, collectés aux fins suivantes :
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                Répondre aux demandes soumises via notre formulaire de contact
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                Gérer les inscriptions à la liste d'attente pour notre service de financement
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                Traiter les soumissions du programme de parrainage
              </li>
            </ul>
            <p className="mt-3">
              Nous ne collectons pas d'informations au-delà de ce qui est nécessaire à ces fins.
              Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des
              tiers à des fins marketing.
            </p>
          </div>

          {/* Conservation des données */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Conservation des données
            </h2>
            <p>
              Les informations personnelles sont conservées uniquement aussi longtemps que
              nécessaire pour remplir la finalité pour laquelle elles ont été collectées. Les
              données relatives aux demandes de contact sont conservées pendant une durée maximale
              de 24 mois. Les données de la liste d'attente et de parrainage sont conservées
              jusqu'au lancement du service concerné ou jusqu'à ce que vous demandiez leur
              suppression, selon ce qui survient en premier.
            </p>
          </div>

          {/* Vos droits */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Vos droits en matière de confidentialité
            </h2>
            <p>
              En vertu de la LPRPDE, vous disposez des droits suivants concernant vos
              informations personnelles :
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Droit d'accès</strong> — Vous pouvez
                  demander une copie des informations personnelles que nous détenons à votre sujet.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Droit de rectification</strong> — Vous
                  pouvez demander la correction d'informations inexactes ou incomplètes.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Droit à l'effacement</strong> — Vous
                  pouvez demander la suppression de vos informations personnelles de nos registres.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#5A0F14]">—</span>
                <span>
                  <strong className="text-neutral-200">Droit de retrait du consentement</strong> — Vous
                  pouvez retirer votre consentement à l'utilisation de vos données à tout moment.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Pour exercer l'un de ces droits, contactez-nous à{" "}
              <a
                href="mailto:contact@nevexacars.com"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                contact@nevexacars.com
              </a>
              . Nous répondrons à toutes les demandes dans un délai de{" "}
              <strong className="text-neutral-200">30 jours</strong>, comme l'exige la LPRPDE.
            </p>
          </div>

          {/* Sécurité */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos informations personnelles contre tout accès non autorisé, divulgation,
              perte ou altération. En cas de violation de données présentant un risque réel de
              préjudice grave, nous notifierons les personnes concernées ainsi que le Commissariat
              à la protection de la vie privée du Canada dans les meilleurs délais.
            </p>
          </div>

          {/* Plaintes */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Déposer une plainte
            </h2>
            <p>
              Si vous estimez que vos droits en matière de confidentialité n'ont pas été respectés,
              vous pouvez nous contacter directement à{" "}
              <a
                href="mailto:contact@nevexacars.com"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                contact@nevexacars.com
              </a>
              . Si votre préoccupation n'est pas résolue, vous avez le droit de déposer une plainte
              auprès du Commissariat à la protection de la vie privée du Canada (CPVP) à{" "}
              <a
                href="https://www.priv.gc.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
              >
                www.priv.gc.ca
              </a>
              .
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Propriété intellectuelle
            </h2>
            <p>
              Tout le contenu de ce site web — y compris les textes, visuels et éléments de
              marque — est la propriété exclusive de Nevexa Automotive Inc. et ne peut être
              reproduit sans autorisation écrite préalable.
            </p>
          </div>

          {/* Marques */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Marques & Références de marques
            </h2>
            <p>
              Les noms de marques, logos et marques déposées de véhicules référencés ou affichés
              sur ce site web (notamment Mercedes-Benz, BMW, Lexus, Porsche, Tesla, Audi, Toyota,
              Land Rover, Cadillac, Hyundai, Honda et Dodge) sont la propriété de leurs
              détenteurs respectifs. Leur utilisation sur ce site est uniquement à des fins
              d'identification et d'information, et n'implique aucune affiliation, approbation,
              parrainage ou partenariat officiel avec Nevexa Automotive Inc. ou ses services.
            </p>
          </div>

          {/* Images */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Images & Contenu visuel
            </h2>
            <p>
              Les photographies et contenus visuels affichés sur ce site sont utilisés à titre
              illustratif uniquement. Ils ne représentent pas nécessairement des véhicules
              spécifiques disponibles à l'achat, des transactions réalisées ou des résultats
              garantis. Nevexa Automotive Inc. ne garantit pas que les véhicules représentés
              sont disponibles ou que les résultats correspondront à ceux présentés.
            </p>
          </div>

          {/* Avertissement */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-200">
              Avertissement
            </h2>
            <p>
              Les informations contenues sur ce site sont fournies à titre informatif général
              uniquement. Nevexa Automotive Inc. se réserve le droit de modifier ses services,
              tarifs et disponibilités à tout moment sans préavis. Nevexa Automotive Inc. agit
              en tant qu'intermédiaire indépendant de sourcing et d'importation et n'est pas un
              concessionnaire agréé ni un représentant officiel d'un fabricant de véhicules
              mentionné sur ce site.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 pt-6 text-[11px] text-neutral-600">
            © {new Date().getFullYear()} Nevexa Automotive Inc. Tous droits réservés.
          </div>

        </div>
      </div>
    </main>
  );
}