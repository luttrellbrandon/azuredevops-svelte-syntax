const addVueSyntax = () => {
	if (!window.monaco) {
		return setTimeout(addVueSyntax, 250);
	}

	const htmlDef = monaco.languages.getLanguages().find(l => l.id === 'html');
	htmlDef.extensions.push('.svelte');
	monaco.languages.register(htmlDef);
	console.log('Added syntax highlighting for .svelte files');
};

addVueSyntax();
