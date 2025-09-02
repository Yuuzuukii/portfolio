import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  ja: {
    // Header
    nav: {
      about: '自己紹介',
      skills: 'スキル',
      research: '研究',
      products: '制作物',
      certifications: '資格',
      contact: '連絡先',
    },
    // Hero
    hero: {
      greeting: 'ようこそ',
      description: '増尾 柚希の自己紹介ページ',
      cta: '詳細を見る',
      contact: 'お問い合わせ',
      scroll: 'スクロールして詳細を見る',
    },
    // About
    about: {
      name: '増尾 柚希',
      title: 'About',
      subtitle: 'Me',
      description: '立命館大学情報理工学部4年生。社会知能研究室（SI Lab）にて、機械学習とデータ分析の研究に従事。ウェブ開発からAI技術まで幅広い技術領域に興味を持ち、理論と実践の両面から技術を探求しています。',
      education: {
        title: '教育',
        university: '立命館大学',
        faculty: '情報理工学部 情報理工学科',
        year: '2021年〜現在（4年生）',
        lab: '社会知能研究室',
      },
      interests: {
        title: '興味分野',
        items: [
          'ウェブアプリケーション開発',
          '機械学習・データ分析',
          'フロントエンド/バックエンド開発',
          'UI/UXデザイン',
        ],
      },
    },
    // Skills
    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description: 'REST API, gRPCを用いたフルスタック開発の実務経験があります。',
      categories: {
        'プログラミング言語': 'プログラミング言語',
        'フロントエンド': 'フロントエンド',
        'バックエンド・DB': 'バックエンド・DB',
        'ツール・その他': 'ツール・その他',
      },
    },
    // Research
    research: {
      title: 'Research',
      subtitle: 'Work',
      website: '研究室ページ',
      image: '研究イメージ',
      description: '立命館大学社会知能研究室（SI Lab）での研究活動と学術的な取り組み',
      items: {
        title: '大規模言語モデルを用いた',
        subtitle: 'マルチエージェント対話プロトコル',
        description: '異文化コラボレーションを軸に、LLMマルチエージェントを用いて社会的課題を解決します',
      },
      highlights: {
        title: '研究の主要テーマ',
        items: [
          {
            title: 'マルチエージェント対話システム',
            description: '大規模言語モデルを活用した複数エージェント間の高度な対話プロトコルを設計',
          },
          {
            title: '文化的価値対立の解決',
            description: '異なる文化的背景を持つエージェント間での価値観の対立と調和のメカニズムを研究',
          },
          {
            title: '意味構築フレームワーク',
            description: '対話を通じた新たな意味や社会制度の創発プロセスをモデル化',
          },
          {
            title: '社会知能の実装',
            description: '人工知能における社会的知識と文化的理解の統合アプローチを開発',
          },
        ]
      }
    },
    // Products
    products: {
      title: 'My',
      subtitle: 'Products',
      description: '技術習得と実践を目的として開発した様々なプロジェクト',
      project: {
        badge: 'Featured Project',
        title: 'ShigaChat',
        description: '滋賀県在住の外国人向け多言語対応Q&Aサービス。ChatGPTとRAG（検索拡張生成）を組み合わせることで、地域特化の情報を迅速かつ正確に提供します。',
        features: 'AI質問応答 / キーワード検索 / カテゴリ分類 / 履歴管理 / 通知システム',
        featuresTitle: '主な機能',
        languages: ['日本語', '英語', 'ベトナム語', '中国語', '韓国語'],
        languagesTitle: '対応言語',
        techStackTitle: '技術スタック',
        githubButton: 'GitHub で見る',
        slides: [
          { caption: 'ログイン画面' },
          { caption: '質問インターフェース' },
          { caption: 'キーワード検索機能' },
          { caption: 'カテゴリ検索機能' },
          { caption: '質問履歴管理' },
          { caption: '閲覧履歴表示' },
          { caption: '質問管理画面' }
        ]
      }
    },
    // Certifications
    certifications: {
      title: 'Certifications',
      subtitle: '& Awards',
      description: '取得した資格と受賞歴',
      items: [
        {
          name: '基本情報技術者',
          code: 'FE',
          category: 'IT',
          level: 'Fundamental',
          description: '情報処理技術者としての基本的な知識とスキルを証明する国家資格'
        },
        {
          name: 'TOEIC IP: 895',
          code: '895',
          category: 'Language',
          level: 'Advanced',
          description: '国際的なビジネス環境で必要な英語コミュニケーション能力を測定するテスト'
        }
      ]
    },
    // Contact
    contact: {
      title: 'Get in',
      subtitle: 'Touch',
      description: 'ご連絡は以下からお願いします。',
      methods: [
        {
          type: 'Email',
          value: 'is0690ke@ed.ritsumei.ac.jp',
          action: 'mailto:is0690ke@ed.ritsumei.ac.jp',
          description: '研究や技術に関するご質問、お仕事のご相談はこちらから'
        },
        {
          type: 'GitHub',
          value: 'github.com/Yuuzuukii',
          action: 'https://github.com/Yuuzuukii',
          description: 'プロジェクトやコードをご覧いただけます'
        },
        {
          type: 'Research Lab',
          value: 'SI Lab - 社会知能研究室',
          action: 'https://www.si-lab.org/index-ja.html',
          description: '所属研究室の詳細情報'
        }
      ],
      email: {
        description: '研究や技術に関するご質問、お仕事のご相談はこちらから',
        copy: 'コピー',
        copied: 'コピー済み',
        send: 'メール送信',
        copyError: 'コピーに失敗しました',
      },
      github: {
        description: 'プロジェクトやコードをご覧いただけます',
        open: '開く',
      },
      lab: {
        description: '所属研究室の詳細情報',
        open: '開く',
      },
      copyright: '© 2024 Yuzuki Masuo. All rights reserved.',
      tech: 'Made using React & Chakra UI',
    },
  },




  en: {
    // Header
    nav: {
      about: 'About',
      skills: 'Skills',
      research: 'Research',
      products: 'Products',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    // Hero
    hero: {
        greeting: 'Welcome',
        description: 'Introduction page of Yuzuki Masuo',
        cta: 'Learn More',
        contact: 'Contact',
        scroll: 'Scroll down to learn more',
    },
    // About
    about: {
        name: 'Yuzuki Masuo',
      title: 'About',
      subtitle: 'Me',
      description: 'A 4th-year student at Ritsumeikan University, Faculty of Information Science and Engineering. Engaged in machine learning and data analysis research at the Social Intelligence Lab (SI Lab). Interested in a wide range of technical domains from web development to AI technology, exploring technology from both theoretical and practical perspectives.',
      education: {
        title: 'Education',
        university: 'Ritsumeikan University',
        faculty: 'Faculty of Information Science and Engineering',
        year: '2021 - Present (4th year)',
        lab: 'Social Intelligence Lab',
      },
      interests: {
        title: 'Interests',
        items: [
          'Web Application Development',
          'Machine Learning & Data Analysis',
          'Frontend/Backend Development',
          'UI/UX Design',
        ],
      },
    },
    // Skills
    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description: 'I have practical experience in full-stack development using REST API and gRPC.',
      categories: {
        'プログラミング言語': 'Programming Languages',
        'フロントエンド': 'Frontend',
        'バックエンド・DB': 'Backend & Database',
        'ツール・その他': 'Tools & Others',
      },
    },
    // Research
    research: {
      title: 'Research',
      subtitle: 'Work',
      description: 'Research activities and academic endeavors at Ritsumeikan University Social Intelligence Lab (SI Lab)',
        website: 'Lab Website',
        image: 'Research Image',
      items: {
        title: 'Multi-Agent Dialogue Protocol',
        subtitle: 'Using Large Language Models',
        description: 'Focusing on cross-cultural collaboration, we aim to solve social issues using LLM multi-agents',
      },
      highlights: {
        title: 'Key Research Themes',
        items: [
          {
            title: 'Multi-Agent Dialogue System',
            description: 'Designing advanced dialogue protocols between multiple agents using large language models',
          },
          {
            title: 'Cultural Value Conflict Resolution',
            description: 'Researching mechanisms for conflict and harmony of values between agents with different cultural backgrounds',
          },
          {
            title: 'Meaning Construction Framework',
            description: 'Modeling the emergence process of new meanings and social institutions through dialogue',
          },
          {
            title: 'Social Intelligence Implementation',
            description: 'Developing integrated approaches for social knowledge and cultural understanding in artificial intelligence',
          },
        ]
      }
    },
    // Products
    products: {
      title: 'My',
      subtitle: 'Products',
      description: 'Various projects developed for technical learning and practical application',
      project: {
        badge: 'Featured Project',
        title: 'ShigaChat',
        description: 'A multilingual Q&A service for foreigners living in Shiga Prefecture. By combining ChatGPT and RAG (Retrieval Augmented Generation), it provides region-specific information quickly and accurately.',
        features: 'AI Q&A / Keyword Search / Category Classification / History Management / Notification System',
        featuresTitle: 'Key Features',
        languages: ['Japanese', 'English', 'Vietnamese', 'Chinese', 'Korean'],
        languagesTitle: 'Supported Languages',
        techStackTitle: 'Tech Stack',
        githubButton: 'View on GitHub',
        slides: [
          { caption: 'Login Screen' },
          { caption: 'Question Interface' },
          { caption: 'Keyword Search Function' },
          { caption: 'Category Search Function' },
          { caption: 'Question History Management' },
          { caption: 'Browsing History Display' },
          { caption: 'Question Management Screen' }
        ]
      }
    },
    // Certifications
    certifications: {
      title: 'Certifications',
      subtitle: '& Awards',
      description: 'Acquired certifications and awards',
      items: [
        {
          name: 'Fundamental Information Tech Engineer',
          code: 'FE',
          category: 'IT',
          level: 'Fundamental',
          description: 'National qualification that certifies basic knowledge and skills as an information technology engineer'
        },
        {
          name: 'TOEIC IP: 895',
          code: '895 points',
          category: 'Language',
          level: 'Advanced',
          description: 'Test that measures English communication skills required in international business environments'
        }
      ]
    },
    // Contact
    contact: {
      title: 'Get in',
      subtitle: 'Touch',
      description: 'Please feel free to reach out to me.',
      methods: [
        {
          type: 'Email',
          value: 'is0690ke@ed.ritsumei.ac.jp',
          action: 'mailto:is0690ke@ed.ritsumei.ac.jp',
          description: 'For research, technical questions, or business inquiries'
        },
        {
          type: 'GitHub',
          value: 'github.com/Yuuzuukii',
          action: 'https://github.com/Yuuzuukii',
          description: 'View my projects and code'
        },
        {
          type: 'Research Lab',
          value: 'SI Lab - Social Intelligence Lab',
          action: 'https://www.si-lab.org/index-ja.html',
          description: 'Detailed information about my research lab'
        }
      ],
      email: {
        description: 'For research, technical questions, or business inquiries',
        copy: 'Copy',
        copied: 'Copied',
        send: 'Send Email',
        copyError: 'Failed to copy',
      },
      github: {
        description: 'View my projects and code',
        open: 'Open',
      },
      lab: {
        description: 'Detailed information about my research lab',
        open: 'Open',
      },
      copyright: '© 2024 Yuzuki Masuo. All rights reserved.',
      tech: 'Made using React & Chakra UI',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return langParam || (window.LANGUAGE || 'ja');
  });

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // fallback to key if translation not found
      }
    }
    
    return value || key;
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
    const url = new URL(window.location);
    if (lang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.pushState({}, '', url);
  };

  return (
    <LanguageContext.Provider value={{ language, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
