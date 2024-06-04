const addSvelteSyntax = () => {
	if (!window.monaco) {
		return setTimeout(addSvelteSyntax, 250);
	}

	const htmlDef = monaco.languages.getLanguages().find(l => l.id === 'html');
	htmlDef.extensions.push('.svelte');
	monaco.languages.register(htmlDef);
	console.log('Added syntax highlighting for .svelte files');
};

addSvelteSyntax();
