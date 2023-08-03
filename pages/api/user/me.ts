export default function handler(req: any, res: any) {
  res.status(200).json({data :
    {
      name: 'John Doe'
    }
  });
}