import { useEffect, useState } from 'react';

// Ce hook compte le nombre de visites du site web côté client
export function useNombreDeVisites() {
	const [visites, setVisites] = useState(null);

	useEffect(() => {
		// Utilisation du localStorage pour éviter de compter plusieurs fois la même visite
		const dejaCompte = localStorage.getItem('visite_comptee');
		if (!dejaCompte) {
			// Incrémente le compteur côté serveur (API fictive ou à remplacer par une vraie API)
			fetch('https://api.countapi.xyz/hit/blanchenova/visites')
				.then(res => res.json())
				.then(data => {
					setVisites(data.value);
					localStorage.setItem('visite_comptee', 'true');
				});
		} else {
			// Récupère juste la valeur actuelle
			fetch('https://api.countapi.xyz/get/blanchenova/visites')
				.then(res => res.json())
				.then(data => setVisites(data.value));
		}
	}, []);

	return visites;
}
