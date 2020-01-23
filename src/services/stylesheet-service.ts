class StyleSheetsService {
    public updateRootCssVariable(){
        let root = document.documentElement;
        root.style.setProperty('--font-color-blue','red');
        root.style.setProperty('--primary-text-color','blue');
    }
}

export default new StyleSheetsService();