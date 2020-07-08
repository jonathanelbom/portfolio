const util = {
    parseProject(node) {
        const project = {tags: []};
        const attrs = node.attributes;
        const texts = node.getElementsByTagName('text');
        const assets = node.getElementsByTagName('asset');
        const links = node.getElementsByTagName('link');
        let i = 0;

        // project id
        for (i = 0; i < attrs.length; i++) {
            const id = attrs.getNamedItem('id');
            project[id.name] = id.value;
        }

        // project text
        for (i = 0; i < texts.length; i++) {
            const text = texts[i];
            project[text.attributes.getNamedItem('id').value] = text.textContent
        }

        // project assets
        const assetsArray = [];
        const assetBlacklist = ['weight', 'preload']
        for (i = 0; i < assets.length; i++) {
            const asset = assets[i];
            const assetData = {
                label: ''
            };
            for (let j = 0; j < asset.attributes.length; j++) {
                const item = asset.attributes.item(j)
                if (assetBlacklist.indexOf(item.name) < 0) {
                    assetData[item.name] = item.value;
                }
            }
            assetsArray.push(assetData);
        }
        project.assets = assetsArray;

        // project links
        const linksArray = [];
        for (i = 0; i < links.length; i++) {
            const link = links[i];
            const linkData = {label: link.textContent};
            for (let j = 0; j < link.attributes.length; j++) {
                const item = link.attributes.item(j)
                linkData[item.name] = item.value;
            }
            linksArray.push(linkData);
        }
        project.links = linksArray;

        return project;
    },

    parseXml(xml, json) {
        window.xml = xml;
        const projects = xml.getElementsByTagName('project');
        for (let i = 0; i < projects.length; i++) {
            const projectSrc = projects[i];
            const project = util.parseProject(projectSrc)
            json.projects[project.id] = project;
        };
    },

    load(xml, callback) {
        const json = {
            globals: {
                resumeUrl: 'JonathanElbom_Resume.pdf',
                mailTo: 'mailto:jb@jonnybomb.com',
                imagePath: 'images/'
            },
            projects: {}
        };
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            util.parseXml(xhr.responseXML.documentElement, json);
            callback(json);
        }
        xhr.onerror = function() {
            console.log("Error while getting XML.");
        }
        xhr.open('GET', xml);
        xhr.responseType = "document";
        xhr.send();
    }
}

export default util;