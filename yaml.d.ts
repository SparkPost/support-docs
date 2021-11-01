declare module 'content/momentum/navigation.yml' {
  const item: {
    title: string;
    link: string;
    items?: this[];
    level?: number;
  };
  const data: item[];
  export default data;
}
