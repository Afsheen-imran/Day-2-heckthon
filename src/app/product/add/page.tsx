'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { client } from '@/sanity/lib/client'

// Define a type for form data
type FormData = {
  name: string;
  price: string;
  description: string;
  category: string;
  image: File | null;
};

export default function AddProduct() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    price: '',
    description: '',
    category: 'other',
    image: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create the product document in Sanity
      const product = await client.create({
        _type: 'product',
        name: formData.name,
        slug: {
          _type: 'slug',
          current: formData.name.toLowerCase().replace(/\s+/g, '-'),
        },
        price: parseFloat(formData.price),
        description: formData.description,
        category: formData.category,
      });

      // If there's an image, upload it
      if (formData.image) {
        const asset = await client.assets.upload('image', formData.image);
        await client
          .patch(product._id)
          .set({
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: asset._id,
              },
            },
          })
          .commit();
      }

      // Redirect after successful submission
      router.push('/');
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handles changes for text fields and select input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handles image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="productPrice">Price</label>
              <input
                type="number"
                id="productPrice"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                step="0.01"
                min="0"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="productDescription">Description</label>
              <textarea
                id="productDescription"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="productCategory">Category</label>
              <select
                id="productCategory"
                name="category"
                value={formData.category}
                onChange={handleChange}
                title="Product Category"
                className="w-full p-2 border rounded-md"
              >
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="productImage">Product Image</label>
              <input
                type="file"
                id="productImage"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? 'Adding Product...' : 'Add Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
