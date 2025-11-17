
## 1.What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type—দুটোই কোনো ডেটার গঠন  নির্ধারণ করতে ব্যবহার করা হয়, কিন্তু এদের ব্যবহার  কিছু উল্লেখযোগ্য পার্থক্য রয়েছে। সাধারণত interface ব্যবহৃত হয় অবজেক্টের shape বা structure নির্ধারণ করার জন্য, যেমন কোনো user বা product-এর attributes নির্দিষ্ট করা। Interface কোডবেসকে সাজানো এবং ক্লাসের সাথে কাজ করা সহজ করে, কারণ এটি inheritance বা extends ব্যবহার করে নতুন কাঠামো তৈরি করতে পারে। অন্যদিকে type আরও বেশি flexible; এর মাধ্যমে শুধুমাত্র object structure নয়, বরং union type, intersection type, tuple, এমনকি primitive টাইপও ডিফাইন করা যায়। Interface-এর সবচেয়ে বড় সুবিধা হলো declaration merging—অর্থাৎ একই interface বারবার লিখলে TypeScript সেগুলোকে স্বয়ংক্রিয়ভাবে merge করে ফেলে। কিন্তু type এ ধরনের merging সাপোর্ট করে না, একই নামে দুইবার লিখলে error দেয়। তাই object এবং class ভিত্তিক ডিজাইনে interface বেশি ব্যবহার করা হয়, আর advanced টাইপ ম্যানিপুলেশন বা জটিল টাইপ তৈরি করতে type উত্তম।

 


## 3.Explain the difference between any, unknown, and never types in TypeScript?

TypeScript-এ any, unknown এবং never—এই তিনটি টাইপের উদ্দেশ্য ও ব্যবহার আলাদা।
any সবচেয়ে কম নিরাপদ টাইপ, কেননা এটি TypeScript-এর সব টাইপ চেক বন্ধ করে দেয়; অর্থাৎ যেকোনো কাজ কোনো রকম সতর্কতা ছাড়াই করা যায়, যা ভুলকে লুকিয়ে রাখতে পারে। 
unknown দেখতে any-এর মতো হলেও এটি অনেক বেশি নিরাপদ, কারণ unknown টাইপের কোনো ভেরিয়েবল ব্যবহার করার আগে অবশ্যই টাইপ চেক করতে হয়—এর ফলে কোডে ভুল হওয়ার সম্ভাবনা কমে যায়। অন্যদিকে never হলো এমন একটি টাইপ যা কখনো কোনো মান ধারণ করে না। সাধারণত এমন ফাংশন যা কখনো return করে না (যেমন error ছুঁড়ে ফেলা), কিংবা এমন পরিস্থিতিতে যেখানে logically কোনো অবস্থাই ঘটার কথা নয়, সেসব ক্ষেত্রে never ব্যবহৃত হয়। সংক্ষেপে, any ব্যবহার করলে টাইপ সেফটি নষ্ট হয়, unknown নিরাপদ alternative হিসেবে কাজ করে, আর never ব্যবহার হয় unreachable বা অসম্ভব স্টেট বোঝাতে।

