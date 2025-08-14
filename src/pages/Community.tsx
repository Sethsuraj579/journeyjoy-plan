import SiteLayout from "@/components/layout/SiteLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

interface BlogPost { id: string; title: string; destination?: string; content: string; createdAt: number; }
const STORAGE_KEY = "goomantu_blogs";

const useBlogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    setPosts(raw ? (JSON.parse(raw) as BlogPost[]) : []);
  }, []);
  const save = (next: BlogPost[]) => {
    setPosts(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };
  return { posts, save };
};

const Community = () => {
  const { posts, save } = useBlogs();
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [content, setContent] = useState("");

  const sorted = useMemo(() => [...posts].sort((a,b)=>b.createdAt-a.createdAt), [posts]);

  const submit = () => {
    if (!title || !content) {
      toast("Please add a title and content");
      return;
    }
    const newPost: BlogPost = { id: crypto.randomUUID(), title, destination, content, createdAt: Date.now() };
    save([newPost, ...posts]);
    setTitle(""); setDestination(""); setContent("");
    toast("Your blog post was saved locally.");
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>Community — Stories, Blogs & Travel Tips | Goomantu</title>
        <meta name="description" content="Read travel stories, write your own blog, and explore practical tips from the community." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Community</h1>
        <Tabs defaultValue="stories">
          <TabsList>
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="tips">Travel Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="mt-6 grid gap-6 md:grid-cols-2">
            {[{
              title: "Solo in Kyoto", excerpt: "I wandered through bamboo groves at dawn and sipped matcha by the river…"
            },{
              title: "Sicily road trip", excerpt: "From Palermo markets to Mt Etna—here’s how we did it for under $70/day."
            }].map((s) => (
              <Card key={s.title} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="blogs" className="mt-6 grid gap-6 md:grid-cols-2">
            {sorted.length === 0 && (
              <Card><CardHeader><CardTitle>No blogs yet</CardTitle><CardDescription>Write your first post in the Write tab.</CardDescription></CardHeader></Card>
            )}
            {sorted.map((p) => (
              <Card key={p.id}>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.destination || "Unknown"} • {new Date(p.createdAt).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent className="whitespace-pre-wrap text-sm text-muted-foreground">{p.content}</CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="write" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Write a Blog</CardTitle>
                <CardDescription>Saved to your browser using local storage</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="A day in Bangkok…" />
                </div>
                <div>
                  <Label htmlFor="dest">Destination (optional)</Label>
                  <Input id="dest" value={destination} onChange={(e)=>setDestination(e.target.value)} placeholder="City, Country" />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <textarea id="content" value={content} onChange={(e)=>setContent(e.target.value)} className="min-h-32 w-full rounded-md border bg-background p-3 text-sm" placeholder="Share your story, tips, and highlights…" />
                </div>
                <div>
                  <Button variant="hero" onClick={submit}>Publish Locally</Button>
                </div>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground mt-2">Want cloud sync and sharing? Connect Supabase later to enable accounts and real publishing.</p>
          </TabsContent>

          <TabsContent value="tips" className="mt-6 grid gap-6 md:grid-cols-2">
            {["Always keep a digital and paper copy of key documents.", "Use fee-free cards and withdraw larger amounts to reduce ATM fees.", "Travel with a tiny first-aid kit and mini duct tape.", "Book popular attractions in advance to avoid peak pricing."]
              .map((tip, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-base">Tip #{idx+1}</CardTitle>
                    <CardDescription>{tip}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </section>
    </SiteLayout>
  );
};

export default Community;
