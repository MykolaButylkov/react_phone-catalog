export type PhoneDetails = {
  id: string,
  namespaceId: string,
  name: string,
  capacity: string,
  capacityAvailable: string[],
  priceRegular: number,
  priceDiscount: number,
  colorsAvailable: string[],
  color: string,
  images: string[],
  description: [
    { title: string, text: string[] },
    { title: string, text: string[] },
    { title: string, text: string[] },
  ],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string[],
};
