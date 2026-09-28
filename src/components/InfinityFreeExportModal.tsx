import React, { useState } from 'react';
import { generateInfinityFreeHtml } from '../utils/infinityFreeHtmlGenerator';
import { Download, Copy, Check, ExternalLink, X, Folder, Server, Globe, FileCode, CheckCircle2 } from 'lucide-react';

interface InfinityFreeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfinityFreeExportModal: React.FC<InfinityFreeExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'download' | 'guide' | 'code'>('download');

  if (!isOpen) return null;

  const htmlContent = generateInfinityFreeHtml();

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1e241b] border border-[#7ED957]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-7 relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#42483a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#42483a] text-[#7ED957] border border-[#7ED957]/40 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <span>Export for InfinityFree</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#7ED957]/15 text-[#7ED957] border border-[#7ED957]/30 font-bold uppercase">
                  htdocs Ready
                </span>
              </h3>
              <p className="text-xs text-[#a4ad9c]">
                Self-contained, production-ready HTML with Elms Sans & brand theme
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8c9483] hover:text-white hover:bg-[#42483a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 my-4 border-b border-[#42483a] pb-3 text-xs">
          <button
            onClick={() => setActiveTab('download')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === 'download'
                ? 'bg-[#7ED957] text-[#151912]'
                : 'text-[#a4ad9c] hover:bg-[#42483a]'
            }`}
          >
            1-Click Download
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-[#7ED957] text-[#151912]'
                : 'text-[#a4ad9c] hover:bg-[#42483a]'
            }`}
          >
            InfinityFree Setup Guide
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeTab === 'code'
                ? 'bg-[#7ED957] text-[#151912]'
                : 'text-[#a4ad9c] hover:bg-[#42483a]'
            }`}
          >
            Raw HTML Preview
          </button>
        </div>

        {/* Body Content */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-4 text-xs">
          {activeTab === 'download' && (
            <div className="space-y-4">
              <div className="bg-[#151912] p-4 rounded-xl border border-[#42483a] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#7ED957]" />
                    <span className="font-bold text-white text-sm">index.html</span>
                  </div>
                  <span className="text-[11px] text-[#7ED957] font-mono">Zero Dependencies</span>
                </div>
                <p className="text-[#a4ad9c] leading-relaxed">
                  This standalone file bundles the full PTFSbridge design, Google Font (<strong>Elms Sans</strong>), 
                  colors (<strong className="text-[#7ED957]">#7ED957</strong> and <strong className="text-[#9da595]">#42483a</strong>), 
                  interactive embed customizer, partner server showcase, and radar board into a single file.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#272e22] border border-[#7ED957]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-black text-white text-sm">Download Standalone HTML File</h4>
                  <p className="text-[11px] text-[#b1bba8]">Drop this straight into InfinityFree's <code className="text-[#7ED957]">htdocs</code> folder</p>
                </div>
                <button
                  id="modal-download-html-btn"
                  onClick={handleDownload}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#7ED957]/20 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download index.html</span>
                </button>
              </div>

              <div className="bg-[#151912] p-4 rounded-xl border border-[#42483a] flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Copy Entire Source Code</span>
                  <span className="text-[#8c9483] text-[11px]">Paste directly into Monsta File Manager editor</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-3.5 py-2 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white font-bold text-xs border border-[#7ED957]/30 flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#7ED957]" /> : <Copy className="w-3.5 h-3.5 text-[#7ED957]" />}
                  <span>{copied ? 'Copied Code!' : 'Copy Code'}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-3">
              <div className="bg-[#151912] p-4 rounded-xl border border-[#42483a] space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Folder className="w-4 h-4 text-[#7ED957]" />
                  <span>How to Host on InfinityFree</span>
                </h4>

                <ol className="space-y-2.5 text-[#c7d0c2] list-decimal list-inside leading-relaxed">
                  <li>
                    Log in to your <strong>InfinityFree Control Panel</strong> and choose your hosting account.
                  </li>
                  <li>
                    Click on <strong>Online File Manager</strong> (or open your FTP client like FileZilla using your InfinityFree FTP credentials).
                  </li>
                  <li>
                    Open the folder named <code className="bg-[#242c1f] text-[#7ED957] px-1.5 py-0.5 rounded font-mono">htdocs</code>.
                  </li>
                  <li>
                    If there is an existing placeholder like <code className="text-[#8c9483]">index2.html</code> or <code className="text-[#8c9483]">default.html</code>, delete or replace it.
                  </li>
                  <li>
                    Upload your downloaded <code className="bg-[#242c1f] text-[#7ED957] px-1.5 py-0.5 rounded font-mono">index.html</code> directly into <code className="text-[#7ED957]">htdocs/</code>.
                  </li>
                  <li>
                    Visit your domain (e.g., <code className="text-white">yourname.infinityfreeapp.com</code>) to see your PTFSbridge community website live on the web!
                  </li>
                </ol>
              </div>

              <div className="bg-[#272e22] p-4 rounded-xl border border-[#7ED957]/30 text-xs text-[#b8c2b0] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7ED957] shrink-0 mt-0.5" />
                <span>
                  <strong>Tip:</strong> The HTML is completely static and client-side with zero server requirements, meaning it works 100% reliably on InfinityFree's free Apache tier with free SSL enabled!
                </span>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#8c9483]">
                <span>Standalone index.html (~600 lines)</span>
                <button
                  onClick={handleCopyCode}
                  className="text-[#7ED957] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copied ? 'Copied to clipboard!' : 'Copy to clipboard'}
                </button>
              </div>
              <pre className="p-3 bg-[#11160e] text-[#b1bba8] rounded-xl border border-[#42483a] font-mono text-[10px] overflow-x-auto max-h-60 leading-tight">
                {htmlContent.slice(0, 1800)}
                {'\n... [Remaining content included in download]'}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-[#42483a] flex items-center justify-between text-xs text-[#8c9483]">
          <span>Format: Standard HTML5 / CSS / JavaScript</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white font-bold cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
