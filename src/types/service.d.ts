type Service = {
    id: number;
    lang: string;
    serviceTypeName: string;
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    url: string;
    phone: string;
    email: string;
    details: string;
};

interface ServiceCardProps {
    name: string;
    address: string;
    phone?: string;
    serviceTypeName?: string;
    image?: string;
}
