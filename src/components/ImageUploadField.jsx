'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, X, Loader2, Link2, Check, RefreshCw } from 'lucide-react';

export default function ImageUploadField({
  label = 'Image',
  value = '',
  onChange,
  placeholder = '/images/sample.jpg',
  compact = false,
  aspectRatio = 'video', // 'video', 'square', 'wide'
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [mode, setMode] = useState('upload'); // 'upload' | 'url'
  const fileInputRef = useRef(null);

  const handleUpload = async (file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (PNG, JPG, WebP, SVG, GIF).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size exceeds the 10MB limit.');
      return;
    }

    setIsUploading(true);
    setUploadError('');
    setUploadSuccess(false);

    try {
      const token = sessionStorage.getItem('isarva_admin_token') || 'isarva2026';
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        onChange(data.url);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      } else {
        setUploadError(data.error || 'Failed to upload image.');
      }
    } catch (err) {
      setUploadError(err.message || 'Network error during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      handleUpload(files[0]);
    }
  };

  const onFileSelect = (e) => {
    const files = e.target?.files;
    if (files && files.length > 0) {
      handleUpload(files[0]);
    }
  };

  return (
    <div className="space-y-2">
      {/* Field Header */}
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-700">
          {label}
        </label>
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-2xs font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`px-2 py-0.5 rounded-md transition cursor-pointer ${
              mode === 'upload' ? 'bg-white text-emerald-700 shadow-2xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            Upload / Drop
          </button>
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`px-2 py-0.5 rounded-md transition cursor-pointer flex items-center gap-1 ${
              mode === 'url' ? 'bg-white text-emerald-700 shadow-2xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            <Link2 size={11} />
            <span>URL</span>
          </button>
        </div>
      </div>

      {/* URL Mode */}
      {mode === 'url' ? (
        <div className="space-y-2">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-mono"
          />
        </div>
      ) : (
        /* Upload / Drag & Drop Mode */
        <div>
          {value ? (
            /* Current Image Preview Bar */
            <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3.5 shadow-2xs group hover:border-emerald-300 transition">
              {/* Thumbnail */}
              <div
                className={`relative shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center ${
                  compact ? 'w-14 h-14' : 'w-24 h-16'
                }`}
              >
                <img
                  src={value}
                  alt="Uploaded preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden w-full h-full items-center justify-center bg-slate-100 text-slate-400"
                >
                  <ImageIcon size={20} />
                </div>
              </div>

              {/* Info & Actions */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800 truncate">
                    {value.split('/').pop()}
                  </span>
                  {uploadSuccess && (
                    <span className="inline-flex items-center gap-1 text-2xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      <Check size={10} /> Uploaded
                    </span>
                  )}
                </div>
                <div className="text-2xs text-slate-400 truncate font-mono mt-0.5">
                  {value}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="inline-flex items-center gap-1 text-2xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md transition cursor-pointer"
                  >
                    <RefreshCw size={11} className={isUploading ? 'animate-spin' : ''} />
                    <span>{isUploading ? 'Uploading...' : 'Replace File'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onChange('')}
                    className="inline-flex items-center gap-1 text-2xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-md transition cursor-pointer"
                  >
                    <X size={11} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Dropzone */
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center ${
                isDragging
                  ? 'border-emerald-500 bg-emerald-50/70 scale-[1.01]'
                  : 'border-slate-300 hover:border-emerald-400 bg-slate-50 hover:bg-emerald-50/20'
              }`}
            >
              {isUploading ? (
                <div className="flex flex-col items-center gap-2 py-2">
                  <Loader2 size={24} className="animate-spin text-emerald-600" />
                  <span className="text-xs font-bold text-slate-700">Uploading image...</span>
                </div>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-105 transition-transform">
                    <UploadCloud size={20} />
                  </div>
                  <div className="text-xs font-bold text-slate-700">
                    <span>Click to browse</span>{' '}
                    <span className="font-normal text-slate-500">or drag and drop</span>
                  </div>
                  <span className="text-2xs text-slate-400 mt-1">
                    PNG, JPG, WebP, SVG (Max 10MB)
                  </span>
                </>
              )}
            </div>
          )}

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml,image/gif,image/avif"
            onChange={onFileSelect}
            className="hidden"
          />
        </div>
      )}

      {/* Error Message */}
      {uploadError && (
        <div className="text-2xs font-medium text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1.5 rounded-lg flex items-center justify-between">
          <span>{uploadError}</span>
          <button type="button" onClick={() => setUploadError('')}>
            <X size={12} />
          </button>
        </div>
      )}
    </div>
  );
}
