function consoleMessage() {
    const currentColor = `background: #${window.currentColor}; color: white;`;

    const style = {
        header: `text-shadow: 1px 1px gray; font-size: 25px; ${currentColor}`,
        normal: `font-weight: bold; font-size: 14px;`
    }    

    console.log('%cHello there!', style.header);
    console.log("%cSince you've also found this part of the site, let me just give you my links again:", style.normal);
    console.log("");
    console.log("%c- Resume: https://github.com/doidor/resume/blob/master/resume.pdf", style.normal);
    console.log("%c- LinkedId: https://www.linkedin.com/in/tdrpopa/", style.normal);
    console.log("%c- Mail: tdr.popa@gmail.com", style.normal);
    console.log("%c- Github: https://github.com/doidor", style.normal);
    console.log("%c- Facebook: https://facebook.com/tudorpopa", style.normal);
    console.log("");
    console.log("%cCheers!", style.normal);
}