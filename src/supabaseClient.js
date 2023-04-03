import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yxyjcgzfnlwsdwzldkkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4eWpjZ3pmbmx3c2R3emxka2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3ODYwOTMsImV4cCI6MTk5MzM2MjA5M30.DQ1W2d1t3xs2Ymb5G3bYS5_HRviiXXIY5Sh7JVBe6aI';

export const supabase = createClient(supabaseUrl, supabaseKey)