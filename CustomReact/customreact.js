function customrender(reactElement,container){

    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children')continue
        domelement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domelement)
}


const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target : '_blank'
    },
    children: 'Click ME Please !'
}


const container = document.getElementById('root')

customrender(reactElement,container)