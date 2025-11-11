import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-sky-600 mb-6">About Kids Tube</h1>
            <div className="space-y-4 text-lg text-gray-700">
                <p>
                    Kids Tube was born from a passion for combining education with entertainment, powered by the latest advancements in artificial intelligence. Our mission is to create a safe, engaging, and joyful learning environment for children all around the world.
                </p>
                <p>
                    We use a suite of cutting-edge AI tools to bring our creative visions to life. Characters and stories are often brainstormed with <span className="font-bold text-pink-500">ChatGPT</span>, our vibrant animations are produced with video generation models like <span className="font-bold text-green-500">VEO AI</span>, and our catchy, original songs are composed using music AI like <span className="font-bold text-purple-500">Suno AI</span>. This allows our small team to produce high-quality content that kids adore.
                </p>
                <p>
                    On the technical side, our backend infrastructure is designed with scalability in mind, leveraging technologies like <span className="font-bold text-yellow-600">Java</span>. To streamline our workflow, we use <span className="font-bold text-blue-500">n8n automation</span> for automatically uploading our final videos to YouTube and cross-posting updates to our Instagram and Facebook pages, ensuring our community never misses a new release.
                </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img 
              src="https://picsum.photos/seed/workspace/800/600" 
              alt="Creative Workspace" 
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;