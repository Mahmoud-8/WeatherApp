
export function getWeatherImageSrc(iconCode) {
    
    switch (true) {
        case iconCode.includes("01"):
            return 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/green-field-over-blue-clear-sky-da-kuk.jpg';

        case iconCode.includes("02"):
            return 'https://images.unsplash.com/photo-1481433705997-f3c061a4eac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'

        case iconCode.includes("03"):
            return 'https://images.unsplash.com/photo-1481433705997-f3c061a4eac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'

        case iconCode.includes("04"):
            return 'https://images.unsplash.com/photo-1481433705997-f3c061a4eac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'

        case iconCode.includes("09"):
            return 'https://plus.unsplash.com/premium_photo-1671816261720-02d6f60148eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

        case iconCode.includes("10"):
            return 'https://plus.unsplash.com/premium_photo-1671816261720-02d6f60148eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

            case iconCode.includes("11"):
            return 'https://plus.unsplash.com/premium_photo-1664304434345-8b8e6b512532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80'
        
            case iconCode.includes("13"):
            return 'https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80';

        case iconCode.includes("50"):
            return 'https://images.unsplash.com/photo-1677709679024-fc005fb4feb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
       
            default:
            return '';
    }
}