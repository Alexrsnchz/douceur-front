import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/misc/Navbar.jsx';
import ProductsTable from '@/components/admin/ProductsTable.jsx';
import AllergensTable from '@/components/admin/AllergensTable.jsx';
import CategoriesTable from '@/components/admin/CategoriesTable.jsx';
import PostsTable from '@/components/admin/PostsTable.jsx';
import UsersTable from '@/components/admin/UsersTable.jsx';
import UsersGrid from '@/components/admin/UsersGrid.jsx';

function Administration() {
  return (
    <>
      <Navbar />
      <Tabs defaultValue="products">
        <TabsList className="w-full flex justify-center bg-gray-100 border-y-2 border-gray-200 rounded-none py-8">
          <TabsTrigger
            value="products"
            className="px-8 py-2.5 data-[state=active]:bg-[#C39898] data-[state=active]:border-2 data-[state=active]:border-[#A87676] data-[state=active]:text-white data-[state=active]:font-bold"
          >
            Productos
          </TabsTrigger>
          <TabsTrigger
            value="allergens"
            className="px-8 py-2.5 data-[state=active]:bg-[#C39898] data-[state=active]:border-2 data-[state=active]:border-[#A87676] data-[state=active]:text-white data-[state=active]:font-bold"
          >
            Alérgenos
          </TabsTrigger>
          <TabsTrigger
            value="categories"
            className="px-8 py-2.5 data-[state=active]:bg-[#C39898] data-[state=active]:border-2 data-[state=active]:border-[#A87676] data-[state=active]:text-white data-[state=active]:font-bold"
          >
            Categorías
          </TabsTrigger>
          <TabsTrigger
            value="posts"
            className="px-8 py-2.5 data-[state=active]:bg-[#C39898] data-[state=active]:border-2 data-[state=active]:border-[#A87676] data-[state=active]:text-white data-[state=active]:font-bold"
          >
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="px-8 py-2.5 data-[state=active]:bg-[#C39898] data-[state=active]:border-2 data-[state=active]:border-[#A87676] data-[state=active]:text-white data-[state=active]:font-bold"
          >
            Usuarios
          </TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <ProductsTable />
        </TabsContent>
        <TabsContent value="allergens">
          <AllergensTable />
        </TabsContent>
        <TabsContent value="categories">
          <CategoriesTable />
        </TabsContent>
        <TabsContent value="posts">
          <PostsTable />
        </TabsContent>
        <TabsContent value="users">
          <UsersGrid />
        </TabsContent>
        <Toaster />
      </Tabs>
    </>
  );
}

export default Administration;
