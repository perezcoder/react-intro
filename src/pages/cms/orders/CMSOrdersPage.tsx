import { useEffect } from 'react';
import { pb } from '../../../pocketbase';

export function CMSOrdersPage() {
  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const res = await pb.collection('orders').getList()
    console.log(res)

  }

  return (
    <div>
      CMS Orders
    </div>
  )

}